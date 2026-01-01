
import type { LEGOSet } from '../types/LEGOSet';
import { formatPriceWithCurrency } from './priceFormatter';

// Mock LEGO set data for testing
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

describe('formatPriceWithCurrency', () => {
  it('should format price with currency and 2 decimal places', () => {
    const result = formatPriceWithCurrency(mockLEGOSet);
    expect(result).toBe('USD 59.99');
  });

  it('should format prices with no decimal places', () => {
    const testSet = { ...mockLEGOSet, price: { currency: "EUR", amount: 100 } };
    const result = formatPriceWithCurrency(testSet);
    expect(result).toBe('EUR 100.00');
  });

  it('should format prices with one decimal place', () => {
    const testSet = { ...mockLEGOSet, price: { currency: "GBP", amount: 45.5 } };
    const result = formatPriceWithCurrency(testSet);
    expect(result).toBe('GBP 45.50');
  });
  
  it('should format prices with more than two decimal places', () => {
    const testSet = { ...mockLEGOSet, price: { currency: "JPY", amount: 59.1234 } };
    const result = formatPriceWithCurrency(testSet);
    expect(result).toBe('JPY 59.12');
  });
});