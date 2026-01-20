import { getOptimizedImageUrl } from './imagePreviewOptimizer';

const baseUrl = '127.0.0.1';

describe('getOptimizedImageUrl', () => {

    it('should return optimized URL with default parameters when no options provided', () => {
        const result = getOptimizedImageUrl(baseUrl);
        expect(result).toBe(`${baseUrl}?format=webply&quality=25&width=600&height=600&dpr=1`);
    });

    it('should return optimized URL with default parameters when empty options object provided', () => {
        const result = getOptimizedImageUrl(baseUrl, {});
        expect(result).toBe(`${baseUrl}?format=webply&quality=25&width=600&height=600&dpr=1`);
    });

    it('should override all options when all provided', () => {
        const result = getOptimizedImageUrl(baseUrl, {
            format: 'jpg',
            quality: 80,
            width: 1200,
            height: 1200,
            dpr: 3,
        });
        expect(result).toBe(`${baseUrl}?format=jpg&quality=80&width=1200&height=1200&dpr=3`);
    });

    it('should handle partial options with remaining defaults', () => {
        const result = getOptimizedImageUrl(baseUrl, { quality: 75, width: 400 });
        expect(result).toBe(`${baseUrl}?format=webply&quality=75&width=400&height=600&dpr=1`);
    });

    it('should return empty string when imageUrl is undefined', () => {
        const result = getOptimizedImageUrl(undefined);
        expect(result).toBe('');
    });

    it('should return empty string when imageUrl is empty string', () => {
        const result = getOptimizedImageUrl('');
        expect(result).toBe('');
    });
});
