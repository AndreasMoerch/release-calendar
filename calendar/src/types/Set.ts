/**
 * Represents a set with its details.
 */
export interface Set {
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
     * Amount of bricks (pieces) in the set. Always a positive integer.
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

    /**
     * URL path for the set.
     * @example "tulip-bouquet-11501"
     */
    urlPath: string;

    /**
     * Optional image URL for the set.
     * @note The image is will by default be way to high resolution for display in the calendar. The CDN supports resizing via URL parameters.
     * @note For backward compatibility, this field may be omitted.
     * @example "https://www.lego.com/cdn/cs/set/assets/blt230df6ac4329bc62/11501_Prod_en-gb.png"
     */
    imageUrl?: string;
}

/**
 * Represents the price of a set.
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