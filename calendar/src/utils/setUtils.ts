import type { Set } from "../types/Set";

/**
 * Utility functions for a single or a list of sets.
 * 
 * This file exports helper functions related to set filtering and sorting.
 */

/**
 * Sorts sets by their theme names in ascending alphabetical order.
 * @param sets non-empty list of sets.
 * @returns sets sorted by theme name, then by set ID if themes are identical.
 */
export const sortByTheme = (sets: Set[]): Set[] => {
    return sets.sort((a, b) => a.theme.localeCompare(b.theme) || a.id.localeCompare(b.id));
}

/**
 * Filters sets to include only those released on or after the specified date.
 * @param sets non-null list of sets with release date
 * @param date date to filter release sets on (inclusive)
 * @returns new filtered list of sets released on or after the specified date
 * @example
 * const filteredSets = setReleasesAfterDateFilter(sets, new Date('2026-01-01'));
 */
export const setReleasesAfterDateFilter = (sets: Set[], date: Date): Set[] => {
    return sets.filter(set => set.releaseDate >= date);
}

/**
 * Groups sets by their release dates and sorts them in ascending order.
 * @param sets non-empty list of sets.
 * @returns Record mapping release date strings to arrays of sets, sorted by release date.
 * @example
 * {
 *   "Mon Jan 01 2026": [Set1, Set2],
 *   "Wed Feb 01 2026": [Set3]
 * }
 */
export const groupByReleaseDateSorted = (sets: Set[]): Record<string, Set[]> =>
    sets
        .sort((a, b) => a.releaseDate.getTime() - b.releaseDate.getTime())
        .reduce((acc, set) => {
            const releaseDate = set.releaseDate;
            if (!acc[releaseDate.toDateString()]) {
                acc[releaseDate.toDateString()] = [];
            }
            acc[releaseDate.toDateString()].push(set);
            return acc;
        }, {} as Record<string, Set[]>)

/**
 * Generates a fully qualified URL for a given set.
 * @param set - non-null set.
 * @returns the URL string for the set.
 * @example "https://www.lego.com/en-us/product/test-set-10001"
 * @todo Future implementation should support localization.
 */
export const generateUrlForSet = (set: Set): string => {
    // Sets are generated via the us-en locale and appeded with set number (id). 
    // This is true even for other locales, e.g. da-dk.
    return `https://www.lego.com/en-us/product/${set.urlPath}`;
}
