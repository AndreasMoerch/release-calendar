import type { LEGOSet } from '../types/LEGOSet';
import setsJson from './sets.json';

/**
 * List of LEGO sets with their details.
 * @example
 * [
 *   {
 *     id: "11501",
 *     name: "Tulip Bouquet",
 *     theme: "Botanical Collection",
 *     pieces: 576,
 *     releaseDate: new Date("2026-01-01"),
 *     price: { currency: "USD", amount: 59.99 }
 *   },
 *   ...
 * ]
 */
export const LEGOSets: LEGOSet[] = setsJson.releases.map((set) => ({
    ...set,
    releaseDate: new Date(set.releaseDate),
}));