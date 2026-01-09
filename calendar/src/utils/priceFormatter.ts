import type { Set } from "../types/Set"

/**
 * Formats the full price for a given set with currency.
 * @param set non-null set with price information
 * @returns the full price string including currency and amount
 * @example "USD 59.99"
 */
export const formatPriceWithCurrency = (set: Set): string => {
    return `${set.price.currency} ${set.price.amount.toFixed(2)}`;
}