import { useEffect, useState } from "react";

const useLocalStorage = (key, fallback) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem(key)) ?? fallback
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(isDark));
  }, [key, isDark]);

  return [isDark, setIsDark];
};

export default useLocalStorage;
