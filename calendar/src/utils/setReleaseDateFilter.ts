import type { LEGOSet } from "../types/LEGOSet";

/**
 * Filters LEGO sets to include only those released on or after the specified date.
 * @param sets non-null list of LEGO sets with release date
 * @param date date to filter release sets on (inclusive)
 * @returns new filtered list of LEGO sets released on or after the specified date
 * @example
 * const filteredSets = setReleasesAfterDateFilter(sets, new Date('2026-01-01'));
 */
export const setReleasesAfterDateFilter = (sets: LEGOSet[], date: Date): LEGOSet[] => {
    return sets.filter(set => set.releaseDate >= date);
}