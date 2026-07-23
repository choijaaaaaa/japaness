// @purpose  단어 목록 렌더링, 레벨/검색 필터링, 카드 모드, 한글 발음 토글, 일본어 TTS 재생
// WHY: 백엔드가 없으므로 발음 재생은 브라우저 내장 Web Speech API(speechSynthesis)로 처리한다.

const state = {
  level: "ALL",
  query: "",
  mode: "card", // "card" | "list"
  order: VOCAB.map((_, i) => i),
  cardIndex: 0,
  reviewMode: false,
};

function shuffleOrder() {
  for (let i = state.order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.order[i], state.order[j]] = [state.order[j], state.order[i]];
  }
}

const listView = document.getElementById("list-view");
const cardView = document.getElementById("card-view");
const cardSlot = document.getElementById("card-slot");
const cardPosition = document.getElementById("card-position");
const emptyState = document.getElementById("empty-state");
const ttsWarning = document.getElementById("tts-warning");
const template = document.getElementById("word-card-template");
const quizTemplate = document.getElementById("quiz-card-template");
const kanjiTemplate = document.getElementById("kanji-word-template");
const kanjiQuizTemplate = document.getElementById("kanji-quiz-template");

function isKanjiMode() {
  return state.level === "한자";
}

const speechSupported = "speechSynthesis" in window;
if (!speechSupported) {
  ttsWarning.hidden = false;
}

function speak(text) {
  if (!speechSupported || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  window.speechSynthesis.speak(utterance);
}

function getFilteredWords() {
  const query = state.query.trim().toLowerCase();

  if (isKanjiMode()) {
    return KANJI.filter((entry) => {
      if (state.reviewMode && !isDueForReview(entry)) return false;
      if (!query) return true;
      return (
        entry.char.toLowerCase().includes(query) ||
        entry.korean.toLowerCase().includes(query) ||
        entry.meaning.toLowerCase().includes(query) ||
        entry.onyomi.some((r) => r.toLowerCase().includes(query)) ||
        entry.kunyomi.some((r) => r.toLowerCase().includes(query))
      );
    });
  }

  const source =
    state.level === "접속사"
      ? CONNECTIVES
      : state.order.map((i) => VOCAB[i]).filter((word) => state.level === "ALL" || word.level === state.level);

  return source.filter((word) => {
    if (state.reviewMode && !isDueForReview(word)) return false;
    if (!query) return true;
    return (
      word.kanji.toLowerCase().includes(query) ||
      word.reading.toLowerCase().includes(query) ||
      word.meaning.toLowerCase().includes(query)
    );
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// WHY: 예문 속 표제어는 활용형(동사 어미, 형용사 어미 등)으로 등장하는 경우가 많아
// 완전 일치가 안 될 수 있다. 표제어 끝에서부터 최대 2글자까지 잘라가며 매칭을 시도한다.
function highlightExample(example, kanji) {
  if (!kanji) return escapeHtml(example);
  const minLen = Math.max(1, kanji.length - 2);
  for (let len = kanji.length; len >= minLen; len--) {
    const fragment = kanji.slice(0, len);
    const idx = example.indexOf(fragment);
    if (idx !== -1) {
      const before = example.slice(0, idx);
      const match = example.slice(idx, idx + fragment.length);
      const after = example.slice(idx + fragment.length);
      return `${escapeHtml(before)}<span class="example-highlight">${escapeHtml(match)}</span>${escapeHtml(after)}`;
    }
  }
  return escapeHtml(example);
}

function renderBreakdown(listEl, breakdown) {
  listEl.innerHTML = "";
  if (!breakdown || breakdown.length === 0) {
    listEl.hidden = true;
    return;
  }
  listEl.hidden = false;
  breakdown.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.word}(${item.reading}) — ${item.meaning}`;
    listEl.appendChild(li);
  });
}

function buildWordCard(word) {
  const node = template.content.firstElementChild.cloneNode(true);

  const badge = node.querySelector(".level-badge");
  badge.textContent = word.category || word.level;
  badge.dataset.level = word.category ? "접속사" : word.level;

  node.querySelector(".kanji").textContent = word.kanji;
  node.querySelector(".reading").textContent = word.reading;
  node.querySelector(".meaning").textContent = word.meaning;

  const koreanReadingEl = node.querySelector(".korean-reading");
  koreanReadingEl.textContent = word.korean;
  const koreanToggleBtn = node.querySelector(".korean-toggle-btn:not(.example-korean-toggle)");
  koreanToggleBtn.addEventListener("click", () => {
    const isShown = !koreanReadingEl.hidden;
    koreanReadingEl.hidden = isShown;
    koreanToggleBtn.setAttribute("aria-pressed", String(!isShown));
  });

  const ttsBtn = node.querySelector(".tts-btn:not(.example-tts)");
  ttsBtn.disabled = !speechSupported;
  ttsBtn.addEventListener("click", () => speak(word.kanji));

  node.querySelector(".example-jp").innerHTML = highlightExample(word.example, word.kanji);
  node.querySelector(".example-meaning").textContent = word.exampleMeaning;

  const exampleKoreanEl = node.querySelector(".example-korean");
  exampleKoreanEl.textContent = word.exampleKorean;
  const exampleKoreanToggleBtn = node.querySelector(".example-korean-toggle");
  exampleKoreanToggleBtn.addEventListener("click", () => {
    const isShown = !exampleKoreanEl.hidden;
    exampleKoreanEl.hidden = isShown;
    exampleKoreanToggleBtn.setAttribute("aria-pressed", String(!isShown));
  });

  const exampleTtsBtn = node.querySelector(".example-tts");
  exampleTtsBtn.disabled = !speechSupported;
  exampleTtsBtn.addEventListener("click", () => speak(word.example));

  renderBreakdown(node.querySelector(".breakdown-list"), word.breakdown);

  return node;
}

function buildQuizCard(word) {
  const node = quizTemplate.content.firstElementChild.cloneNode(true);

  const badge = node.querySelector(".level-badge");
  badge.textContent = word.category || word.level;
  badge.dataset.level = word.category ? "접속사" : word.level;

  node.querySelector(".kanji").textContent = word.kanji;
  node.querySelector(".kanji-reading").textContent = `(${word.reading})`;
  node.querySelector(".example-jp").innerHTML = highlightExample(word.example, word.kanji);
  node.querySelector(".example-reading").textContent = `(${word.exampleReading})`;

  node.querySelector(".korean-reading").textContent = word.korean;
  node.querySelector(".meaning").textContent = word.meaning;
  node.querySelector(".example-korean").textContent = word.exampleKorean;
  node.querySelector(".example-meaning").textContent = word.exampleMeaning;

  const answerEl = node.querySelector(".quiz-answer");
  const revealBtn = node.querySelector(".reveal-btn");
  revealBtn.addEventListener("click", () => {
    const isShown = !answerEl.hidden;
    answerEl.hidden = isShown;
    revealBtn.setAttribute("aria-pressed", String(!isShown));
    revealBtn.textContent = isShown ? "정답 확인" : "정답 숨기기";
  });

  const wordTtsBtn = node.querySelector(".tts-word-btn");
  wordTtsBtn.disabled = !speechSupported;
  wordTtsBtn.addEventListener("click", () => speak(word.kanji));

  const exampleTtsBtn = node.querySelector(".tts-example-btn");
  exampleTtsBtn.disabled = !speechSupported;
  exampleTtsBtn.addEventListener("click", () => speak(word.example));

  renderBreakdown(node.querySelector(".breakdown-list"), word.breakdown);

  const wrongBtn = node.querySelector(".srs-wrong-btn");
  const knownBtn = node.querySelector(".srs-known-btn");
  const handleSrsChoice = (knew) => {
    markItem(word, knew);
    updateStatsUI();
    state.cardIndex += 1;
    render();
  };
  wrongBtn.addEventListener("click", () => handleSrsChoice(false));
  knownBtn.addEventListener("click", () => handleSrsChoice(true));

  return node;
}

function buildKanjiCard(entry) {
  const node = kanjiTemplate.content.firstElementChild.cloneNode(true);

  const badge = node.querySelector(".level-badge");
  badge.textContent = entry.level;
  badge.dataset.level = entry.level;

  node.querySelector(".kanji").textContent = entry.char;
  node.querySelector(".kanji-korean").textContent = entry.korean;
  node.querySelector(".meaning").textContent = entry.meaning;
  node.querySelector(".onyomi").textContent = entry.onyomi.join("、");
  node.querySelector(".kunyomi").textContent = entry.kunyomi.join("、");
  node.querySelector(".mnemonic").textContent = entry.mnemonic;

  const ttsBtn = node.querySelector(".tts-btn");
  ttsBtn.disabled = !speechSupported;
  ttsBtn.addEventListener("click", () => speak(entry.char));

  renderBreakdown(node.querySelector(".related-words"), entry.relatedWords);

  return node;
}

function buildKanjiQuizCard(entry) {
  const node = kanjiQuizTemplate.content.firstElementChild.cloneNode(true);

  const badge = node.querySelector(".level-badge");
  badge.textContent = entry.level;
  badge.dataset.level = entry.level;

  node.querySelector(".kanji").textContent = entry.char;
  node.querySelector(".kanji-korean").textContent = entry.korean;
  node.querySelector(".meaning").textContent = entry.meaning;
  node.querySelector(".onyomi").textContent = entry.onyomi.join("、");
  node.querySelector(".kunyomi").textContent = entry.kunyomi.join("、");
  node.querySelector(".mnemonic").textContent = entry.mnemonic;

  const answerEl = node.querySelector(".quiz-answer");
  const revealBtn = node.querySelector(".reveal-btn");
  revealBtn.addEventListener("click", () => {
    const isShown = !answerEl.hidden;
    answerEl.hidden = isShown;
    revealBtn.setAttribute("aria-pressed", String(!isShown));
    revealBtn.textContent = isShown ? "정답 확인" : "정답 숨기기";
  });

  const ttsBtn = node.querySelector(".tts-word-btn");
  ttsBtn.disabled = !speechSupported;
  ttsBtn.addEventListener("click", () => speak(entry.char));

  renderBreakdown(node.querySelector(".related-words"), entry.relatedWords);

  const wrongBtn = node.querySelector(".srs-wrong-btn");
  const knownBtn = node.querySelector(".srs-known-btn");
  const handleSrsChoice = (knew) => {
    markItem(entry, knew);
    updateStatsUI();
    state.cardIndex += 1;
    render();
  };
  wrongBtn.addEventListener("click", () => handleSrsChoice(false));
  knownBtn.addEventListener("click", () => handleSrsChoice(true));

  return node;
}

function renderList(words) {
  listView.innerHTML = "";
  const fragment = document.createDocumentFragment();
  words.forEach((word) => fragment.appendChild(isKanjiMode() ? buildKanjiCard(word) : buildWordCard(word)));
  listView.appendChild(fragment);
}

function renderCard(words) {
  cardSlot.innerHTML = "";
  if (words.length === 0) {
    cardPosition.textContent = "0 / 0";
    return;
  }
  if (state.cardIndex >= words.length) state.cardIndex = 0;
  if (state.cardIndex < 0) state.cardIndex = words.length - 1;

  const word = words[state.cardIndex];
  cardSlot.appendChild(isKanjiMode() ? buildKanjiQuizCard(word) : buildQuizCard(word));
  cardPosition.textContent = `${state.cardIndex + 1} / ${words.length}`;
}

function render() {
  const words = getFilteredWords();
  emptyState.hidden = words.length !== 0;

  if (state.mode === "list") {
    listView.hidden = words.length === 0;
    cardView.hidden = true;
    renderList(words);
  } else {
    listView.hidden = true;
    cardView.hidden = words.length === 0;
    renderCard(words);
  }
}

// WHY: 마스터 완료(박스 만렙)는 반영까지 몇 주가 걸려 눌러도 즉시 숫자가 안 움직이는 것처럼 보일 수 있다.
// 레벨 탭은 누를 때마다 바로 움직이는 "학습함" 수를 보여주고, 장기적인 마스터 현황은
// 상단 통계 바(학습함·마스터 모두 표시)에서 확인하는 구성으로 나눈다.
function updateLevelTabLabels() {
  document.querySelectorAll(".level-tab").forEach((tab) => {
    if (!tab.dataset.baseLabel) {
      tab.dataset.baseLabel = tab.textContent;
    }
    const stats = getLevelStats(tab.dataset.level);
    tab.textContent = `${tab.dataset.baseLabel}（${stats.studied}/${stats.total}）`;
  });
}

function renderStatsBar() {
  const statsBar = document.getElementById("stats-bar");
  if (!statsBar) return;
  const stats = getOverallStats();
  statsBar.textContent = `📊 학습함 ${stats.studied.toLocaleString()}개 · 마스터 ${stats.mastered.toLocaleString()}개 · 오늘 복습 ${stats.todayCount}개 · 연속 학습 ${stats.streak}일`;
}

function updateStatsUI() {
  renderStatsBar();
  updateLevelTabLabels();
}

document.querySelectorAll(".level-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".level-tab").forEach((t) => {
      t.classList.remove("is-active");
      t.setAttribute("aria-pressed", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-pressed", "true");
    state.level = tab.dataset.level;
    state.cardIndex = 0;
    render();
  });
});

document.getElementById("review-toggle").addEventListener("click", (e) => {
  state.reviewMode = !state.reviewMode;
  e.currentTarget.setAttribute("aria-pressed", String(state.reviewMode));
  state.cardIndex = 0;
  render();
});

document.getElementById("search-input").addEventListener("input", (e) => {
  state.query = e.target.value;
  state.cardIndex = 0;
  render();
});

const modeToggleBtn = document.getElementById("mode-toggle");
modeToggleBtn.addEventListener("click", () => {
  state.mode = state.mode === "card" ? "list" : "card";
  modeToggleBtn.textContent = state.mode === "card" ? "📚 단어장 보기" : "🔀 카드 퀴즈";
  modeToggleBtn.setAttribute("aria-pressed", String(state.mode === "list"));
  render();
});

document.getElementById("shuffle-btn").addEventListener("click", () => {
  shuffleOrder();
  state.cardIndex = 0;
  render();
});

document.getElementById("card-prev").addEventListener("click", () => {
  state.cardIndex -= 1;
  render();
});

document.getElementById("card-next").addEventListener("click", () => {
  state.cardIndex += 1;
  render();
});

shuffleOrder();
render();
updateStatsUI();
