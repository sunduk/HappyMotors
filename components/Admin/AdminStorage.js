// utils/adminStorage.js

const STORAGE_KEY = 'adminSettings';

export function saveAdminSettings(newData) {
  // 현재 값 가져오기
  const existing = getAdminSettings();
  // 새로운 데이터 덮어쓰기
  const merged = { ...existing, ...newData };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
}

export function getAdminSettings() {
  if (typeof window === 'undefined') return {}; // SSR 안전
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

export function clearAdminSettings() {
  localStorage.removeItem(STORAGE_KEY);
}
