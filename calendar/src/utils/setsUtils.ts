import type { LEGOSet } from "../types/LEGOSet";

/**
 * Utility functions for a list of LEGO sets.
 * 
 * This file exports helper functions related to LEGO set filtering and sorting.
 */

/**
 * Sorts LEGO sets by their theme names in ascending alphabetical order.
 * @param sets non-empty list of LEGO sets.
 * @returns LEGO sets sorted by theme name, then by set ID if themes are identical.
 */
export const sortByTheme = (sets: LEGOSet[]): LEGOSet[] => {
    return sets.sort((a, b) => a.theme.localeCompare(b.theme) || a.id.localeCompare(b.id));
}

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

/**
 * Groups LEGO sets by their release dates and sorts them in ascending order.
 * @param sets non-empty list of LEGO sets.
 * @returns Record mapping release date strings to arrays of LEGO sets, sorted by release date.
 * @example
 * {
 *   "Mon Jan 01 2026": [LEGOSet1, LEGOSet2],
 *   "Wed Feb 01 2026": [LEGOSet3]
 * }
 */
export const groupByReleaseDateSorted = (sets: LEGOSet[]): Record<string, LEGOSet[]> =>
    sets
        .sort((a, b) => a.releaseDate.getTime() - b.releaseDate.getTime())
        .reduce((acc, set) => {
            const releaseDate = set.releaseDate;
            if (!acc[releaseDate.toDateString()]) {
                acc[releaseDate.toDateString()] = [];
            }
            acc[releaseDate.toDateString()].push(set);
            return acc;
        }, {} as Record<string, LEGOSet[]>)