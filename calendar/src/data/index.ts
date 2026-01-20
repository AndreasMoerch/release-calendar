import type { Set } from '../types/Set';
import type { Locale } from '../types/Locale';
import json from './sets.json';

/**
 * List of  sets with their details.
 * @example
 * [
 *   {
 *     id: "11501",
 *     name: "Tulip Bouquet",
 *     theme: "Botanical Collection",
 *     pieces: 576,
 *     releaseDate: new Date("2026-01-01"),
 *     urlPath: "tulip-bouquet-11501",
 *     imageUrl: "https://www.lego.com/cdn/cs/set/assets/blt230df6ac4329bc62/11501_Prod_en-gb.png",
 *     price: { currency: "USD", amount: 59.99 }
 *   },
 *   ...
 * ]
 */
export const AllSets = (locale: Locale): Set[] =>
    setsData.releases.map((set) => {
        const localeData = set.locales[locale];
        return {
            id: set.id,
            name: localeData.name,
            theme: localeData.theme,
            pieces: set.pieces,
            releaseDate: new Date(set.releaseDate),
            urlPath: set.urlPath,
            imageUrl: set.imageUrl,
            price: localeData.price,
        }
    });

/**
 * Internal type representing the structure of  set data in JSON.
 * Contains option for multiple locales, which is mapped to a single locale in the exported Set type.
 */
const setsData: setsJson = json as setsJson;

type setsJson = {
    releases: setJson[];
}

type setJson = {
  id: string;
  locales: Record<Locale, localeJson>; // Note: Can be multiple locales in the future, hence the Record type.
  pieces: number;
  releaseDate: string;
  urlPath: string;
  imageUrl?: string;
};

type localeJson = {
  name: string;
  theme: string;
  price: priceJson;
};

type priceJson = {
    currency: string;
    amount: number;
}

