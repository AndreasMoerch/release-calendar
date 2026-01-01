import type { LEGOSet } from "../types/LEGOSet";

/**
 * Generates a fully qualified URL for a given LEGO set.
 * @param set - non-null LEGO set.
 * @returns the URL string for the LEGO set.
 * @example "https://www.lego.com/en-us/product/test-set-10001"
 * @todo Future implementation should support localization. In case of locale set name, this would require english data as well, as the URL are constructed using that 
 */
export const generateUrlForSet = (set: LEGOSet): string => {
    // Sets are generated via the us-en locale and appeded with set number (id). 
    // This is true even for other locales, e.g. da-dk.
    return `https://www.lego.com/en-us/product/${lowercaseAndHyphenate(set.name)}-${set.id}`;
}

/**
 * Converts a string to lowercase and replaces all whitespace sequences with hyphens.
 * @param input non-null string to be transformed
 * @returns the lowercased string with whitespace sequences replaced by hyphens
 * @example "Foo Bar Baz" -> "foo-bar-baz"
 */
const lowercaseAndHyphenate = (input: string): string => {
    return input.toLowerCase().replace(/\s+/g, '-');
}