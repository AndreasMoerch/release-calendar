import type { LEGOSet } from "../types/LEGOSet";

/**
 * Sorts LEGO sets by their theme names in ascending alphabetical order.
 * @param sets non-empty list of LEGO sets.
 * @returns LEGO sets sorted by theme name, then by set ID if themes are identical.
 */
export const sortByTheme = (sets: LEGOSet[]): LEGOSet[] => {
    return sets.sort((a, b) => a.theme.localeCompare(b.theme) || a.id.localeCompare(b.id));
}