// @purpose  단어 목록 렌더링, 레벨/검색 필터링, 카드 모드, 한글 발음 토글, 일본어 TTS 재생
// WHY: 백엔드가 없으므로 발음 재생은 브라우저 내장 Web Speech API(speechSynthesis)로 처리한다.

const state = {
  level: "ALL",
  query: "",
  mode: "card", // "card" | "list"
  order: VOCAB.map((_, i) => i),
  cardIndex: 0,
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
  return state.order
    .map((i) => VOCAB[i])
    .filter((word) => {
      if (state.level !== "ALL" && word.level !== state.level) return false;
      if (!query) return true;
      return (
        word.kanji.toLowerCase().includes(query) ||
        word.reading.toLowerCase().includes(query) ||
        word.meaning.toLowerCase().includes(query)
      );
    });
}

function buildWordCard(word) {
  const node = template.content.firstElementChild.cloneNode(true);

  const badge = node.querySelector(".level-badge");
  badge.textContent = word.level;
  badge.dataset.level = word.level;

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

  node.querySelector(".example-jp").textContent = word.example;
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

  return node;
}

function buildQuizCard(word) {
  const node = quizTemplate.content.firstElementChild.cloneNode(true);

  const badge = node.querySelector(".level-badge");
  badge.textContent = word.level;
  badge.dataset.level = word.level;

  node.querySelector(".kanji").textContent = word.kanji;
  node.querySelector(".kanji-reading").textContent = `(${word.reading})`;
  node.querySelector(".example-jp").textContent = word.example;
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

  return node;
}

function renderList(words) {
  listView.innerHTML = "";
  const fragment = document.createDocumentFragment();
  words.forEach((word) => fragment.appendChild(buildWordCard(word)));
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
  cardSlot.appendChild(buildQuizCard(word));
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
