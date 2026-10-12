export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "zb-theme";
export const THEME_EVENT = "zb-theme";

export const THEME_COLORS = {
  dark: "#000000",
  light: "#f2f5f6",
} as const;

export function resolveTheme(value: string | null | undefined): Theme {
  return value === "light" ? "light" : "dark";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLORS[theme]);

  window.dispatchEvent(new CustomEvent<Theme>(THEME_EVENT, { detail: theme }));
}

export function readStoredTheme(): Theme {
  try {
    return resolveTheme(localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    return "dark";
  }
}

export function readDomTheme(): Theme {
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

/** Runs before paint so a saved light theme does not flash dark first. */
export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);var root=document.documentElement;if(t==="light"){root.classList.remove("dark");root.classList.add("light");root.style.colorScheme="light";}else{root.classList.add("dark");root.classList.remove("light");root.style.colorScheme="dark";}var meta=document.querySelector('meta[name="theme-color"]');if(meta){meta.setAttribute("content",t==="light"?"${THEME_COLORS.light}":"${THEME_COLORS.dark}");}}catch(e){}})();`;
