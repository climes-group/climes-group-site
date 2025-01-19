import { createContext, useEffect, useState } from "react";

const defaultContext = {
  isDarkMode: false,
  toggleColorMode: () => {},
};

export const ThemeContext = createContext(defaultContext);

export function ThemeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(defaultContext.isDarkMode);

  // set the color mode based on the user's preference
  useEffect(() => {
    const savedMode = localStorage.getItem("color-mode");
    if (savedMode) {
      setDarkMode(savedMode === "dark");
    } else {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDarkMode(userPrefersDark);
    }
  }, []);

  // save the color mode to local storage (when it changes)
  useEffect(() => {
    localStorage.setItem("color-mode", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // set the color mode on the root element (when it changes)
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(isDarkMode ? "light" : "dark");
    root.classList.add(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleColorMode: () => setDarkMode((isDark) => !isDark),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
