import type { LEGOSet } from "../types/LEGOSet"

/**
 * Formats the full price for a given LEGO set with currency.
 * @param set non-null LEGO set with price information
 * @returns the full price string including currency and amount
 * @example "USD 59.99"
 */
export const formatPriceWithCurrency = (set: LEGOSet): string => {
    return `${set.price.currency} ${set.price.amount.toFixed(2)}`;
}