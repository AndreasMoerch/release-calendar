/**
 * Represents a LEGO set with its details.
 */
export interface LEGOSet {
    /**
     * Unique identifier for the set.
     * Corresponding to the set id of.
     * @example "11501"
     */
    id: string;
    /**
     * Name of the set. Does not include set number or theme.
     * @example "Tulip Bouquet"
     */
    name: string;
    /**
     * Theme of the set that it belongs to.
     * @example "Botanical Collection"
     */
    theme: string;
    /**
     * Amount of LEGO bricks (pieces) in the set. Always a positive integer.
     * @example 576
     */
    pieces: number;
    /**
     * Release date of the set.
     * @example new Date("2026-01-01")
     */
    releaseDate: Date;
    /**
     * Price of the set.
     * @example { curreny: "USD", amount: 59.99 }
     */
    price: Price;
}

/**
 * Represents the price of a LEGO set.
 */
export interface Price {
    /**
     * Currency of the price.
     * @example "USD"
     */
    currency: string;
    /**
     * Amount of the price in the specified currency.
     * @example 59.99
     */
    amount: number;
}