/**
 * LocalStorage에 key value 저장
 * @param {string }key 키밸류 페어의 키
 * @param {string }value 키벨류 페어의 벨류
 * @returns void
 */

export const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    console.log("window is undefined");
  }
};

export const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
};
