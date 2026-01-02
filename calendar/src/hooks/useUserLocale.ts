import { useMemo } from "react";
import type { Locale } from "../types/Locale";

/**
 * Custom hook to determine the user's locale based on browser settings.
 * @param locale - Fallback locale if browser locale is not supported.
 * @returns the user's locale based on browser settings or the default locale.
 * @example
 * const userLocale = useUserLocale(); // e.g. "en-US"
 */
export function useUserLocale(locale: Locale = "en-US") {
  return useMemo(() => {
    const browserLocale = navigator.language;
    console.log("Detected browser locale:", browserLocale);
    return locale;
  }, [locale]);
}