// @purpose  단어/접속사/한자 학습 진도 관리(라이트너 박스 방식). 백엔드 없이 브라우저 localStorage에만 저장.
// WHY: VOCAB·CONNECTIVES·KANJI 세 배열의 항목 모양이 서로 달라(kanji/category/char) 단일 키로 묶이지 않으므로,
// 출처별 접두사를 붙인 itemKey로 구분해 하나의 진도 저장소에서 충돌 없이 관리한다.
// 정답을 맞출 때마다 박스가 한 단계씩 올라가며 복습 간격이 길어지고, 틀리면 박스 1로 되돌아간다.

const PROGRESS_KEY = "japaness-progress-v1";
const STREAK_KEY = "japaness-streak-v1";
const BOX_INTERVAL_DAYS = [1, 3, 7, 14, 30];
const DAY_MS = 24 * 60 * 60 * 1000;

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // localStorage 사용 불가(시크릿 모드 등) — 저장만 안 될 뿐 학습 자체는 계속 가능
  }
}

let progressData = loadJSON(PROGRESS_KEY, {});
let streakData = loadJSON(STREAK_KEY, { streak: 0, lastDate: null, todayCount: 0 });

function itemKey(item) {
  if (item.char) return `kanji_${item.char}`;
  if (item.category) return `conn_${item.kanji}`;
  return `vocab_${item.level}_${item.kanji}`;
}

function getItemProgress(item) {
  return progressData[itemKey(item)] || null;
}

function isMastered(item) {
  const p = getItemProgress(item);
  return !!p && p.box >= BOX_INTERVAL_DAYS.length - 1;
}

function isDueForReview(item) {
  const p = getItemProgress(item);
  if (!p) return false;
  return p.nextReview <= Date.now();
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function bumpStreak() {
  const today = todayStr();
  if (streakData.lastDate === today) {
    streakData.todayCount += 1;
  } else {
    const yesterday = new Date(Date.now() - DAY_MS).toISOString().slice(0, 10);
    streakData.streak = streakData.lastDate === yesterday ? streakData.streak + 1 : 1;
    streakData.lastDate = today;
    streakData.todayCount = 1;
  }
  saveJSON(STREAK_KEY, streakData);
}

function markItem(item, knew) {
  const key = itemKey(item);
  const existing = progressData[key] || { box: 0, correctCount: 0, wrongCount: 0 };
  let box = existing.box;
  if (knew) {
    box = Math.min(box + 1, BOX_INTERVAL_DAYS.length - 1);
    existing.correctCount += 1;
  } else {
    box = 0;
    existing.wrongCount += 1;
  }
  const now = Date.now();
  progressData[key] = {
    box,
    correctCount: existing.correctCount,
    wrongCount: existing.wrongCount,
    lastReviewed: now,
    nextReview: now + BOX_INTERVAL_DAYS[box] * DAY_MS,
  };
  saveJSON(PROGRESS_KEY, progressData);
  bumpStreak();
}

function getSourceItems(level) {
  if (level === "접속사") return CONNECTIVES;
  if (level === "한자") return KANJI;
  if (level === "ALL") return VOCAB;
  return VOCAB.filter((w) => w.level === level);
}

function getLevelStats(level) {
  const items = getSourceItems(level);
  let studied = 0;
  let mastered = 0;
  items.forEach((item) => {
    const p = getItemProgress(item);
    if (p) studied += 1;
    if (p && p.box >= BOX_INTERVAL_DAYS.length - 1) mastered += 1;
  });
  return { studied, mastered, total: items.length };
}

function getOverallStats() {
  const keys = Object.keys(progressData);
  const studied = keys.length;
  const mastered = keys.filter((k) => progressData[k].box >= BOX_INTERVAL_DAYS.length - 1).length;
  return { studied, mastered, streak: streakData.streak, todayCount: streakData.todayCount };
}
