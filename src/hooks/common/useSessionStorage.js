import { useState, useCallback } from "react";

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";

const useSessionStorage = () => {
  const [item, setItem] = useState(() => {
    if (sessionStorage.getItem(ACCESS_TOKEN_KEY) !== null)
      return sessionStorage.getItem(ACCESS_TOKEN_KEY);
    return null;
  });

  const setSessionStorageItem = useCallback(
    (value) => {
      if (!value) return;
      if (typeof value === "undefined" || typeof value !== "string") return;
      setItem(value);
      sessionStorage.setItem(ACCESS_TOKEN_KEY, value);
    },
    [setItem]
  );

  const clearSessionStorageItem = useCallback(() => {
    if (!item) return;
    setItem(null);
    sessionStorage.clear();
  }, [item, setItem]);

  return {
    item,
    setSessionStorageItem,
    clearSessionStorageItem,
  };
};

export default useSessionStorage;
