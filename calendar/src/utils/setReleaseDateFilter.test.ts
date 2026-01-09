import type { LEGOSet } from "../types/LEGOSet";
import { setReleasesAfterDateFilter } from "./setReleaseDateFilter";

// Mock LEGO set data for testing
const mockLEGOSet: LEGOSet = {
    id: "10001",
    name: "Test Set",
    theme: "Test Theme",
    pieces: 100,
    releaseDate: new Date('2026-01-15'),
    urlPath: "test-set-10001",
    price: {
        currency: "USD",
        amount: 59.99
    }
};
describe('setReleasesAfterDateFilter', () => {
    it('should filter sets released on or after the specified date', () => {
        const sets: LEGOSet[] = [
            { ...mockLEGOSet, releaseDate: new Date('2026-01-01') }, // Before
            { ...mockLEGOSet, releaseDate: new Date('2026-01-15') }, // Before
            { ...mockLEGOSet, releaseDate: new Date('2026-02-01') }, // Inclusive (same date as filter)
            { ...mockLEGOSet, releaseDate: new Date('2026-02-15') }, // After
        ];

        const result = setReleasesAfterDateFilter(sets, new Date('2026-02-01'));
        expect(result).toStrictEqual([
            { ...mockLEGOSet, releaseDate: new Date('2026-02-01') },
            { ...mockLEGOSet, releaseDate: new Date('2026-02-15') },
        ]);
    });
});