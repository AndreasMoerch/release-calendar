import type { LEGOSet } from "../types/LEGOSet"

/**
 * Formats the name of the month for a given LEGO set's release date.
 * @param set non-null LEGO set with release date
 * @returns the name of the month for the set's release date
 * @example "January"
 * @todo Future implementation should support localization
 */
export const formatReleaseMonthName = (set: LEGOSet): string => {
    return set.releaseDate.toLocaleDateString('en-US', { month: 'long' });
}

/**
 * Formats the name of the day of the week for a given LEGO set's release date.
 * @param set non-null LEGO set with release date
 * @returns the name of the day of the week for the set's release date
 * @example "Monday"
 * @todo Future implementation should support localization
 */
export const formatReleaseDayName = (set: LEGOSet): string => {
    return set.releaseDate.toLocaleDateString('en-US', { weekday: 'long' });
}

/**
 * Formats the day of the month for a given LEGO set's release date.
 * @param set non-null LEGO set with release date
 * @returns the day of the month for the set's release date
 * @example 1
 */
export const formatReleaseDay = (set: LEGOSet): number => {
    return set.releaseDate.getDate();
}