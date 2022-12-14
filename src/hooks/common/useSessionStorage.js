import { useState, useCallback } from "react";

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";
const USER_ID = "USER_ID";

const useSessionStorage = () => {
  const [item, setItem] = useState(() => {
    if (sessionStorage.getItem(ACCESS_TOKEN_KEY) !== null)
      return sessionStorage.getItem(ACCESS_TOKEN_KEY);
    return null;
  });
  const [userId, setUserId] = useState(() => {
    if (sessionStorage.getItem(USER_ID) !== null)
      return sessionStorage.getItem(USER_ID);
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

  const setUserIdSessionStorageItem = useCallback(
    (value) => {
      if (!value) return;
      if (typeof value === "undefined" || typeof value !== "number") return;
      setUserId(value);
      sessionStorage.setItem(USER_ID, value);
    },
    [setUserId]
  );

  const clearSessionStorageItem = useCallback(() => {
    if (!item) return;
    setItem(null);
    setUserId(null);
    sessionStorage.clear();
  }, [item, setItem, setUserId]);

  return {
    item,
    userId,
    setSessionStorageItem,
    setUserIdSessionStorageItem,
    clearSessionStorageItem,
  };
};

export default useSessionStorage;
