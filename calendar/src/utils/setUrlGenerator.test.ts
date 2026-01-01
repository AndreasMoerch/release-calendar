import type { LEGOSet } from "../types/LEGOSet";
import { generateUrlForSet } from './setUrlGenerator';

const mockLEGOSet: LEGOSet = {
  id: "10001",
  name: "Test Set",
  theme: "Test Theme",
  pieces: 100,
  releaseDate: new Date('2026-01-15'),
  price: {
    currency:  "USD",
    amount: 59.99
  }
};

describe('generateUrlForSet', () => {
  it('should generate the correct URL for a LEGO set', () => {
    const result = generateUrlForSet(mockLEGOSet);
    expect(result).toBe('https://www.lego.com/en-us/product/test-set-10001');
  });
}); 