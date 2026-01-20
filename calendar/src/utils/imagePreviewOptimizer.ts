/**
 * Generates an optimized image URL for display with CDN parameters.
 * @param imageUrl - Base image URL from the set data
 * @param options - Optional configuration for image optimization. Using sensible defaults if not provided.
 * @returns Optimized image URL with CDN parameters
 * @example
 * const optimizedUrl = getOptimizedImageUrl(set.imageUrl, { width: 600, quality: 25 });
 */
export const getOptimizedImageUrl = (
    imageUrl?: string,
    options: {
        format?: string;
        quality?: number;
        width?: number;
        height?: number;
        dpr?: number;
    } = {}
): string => {
    // Sensible defaults for image optimization.
    const {
        format = 'webply',
        quality = 25,
        width = 600,
        height = 600,
        dpr = 1,
    } = options;

    const params = new URLSearchParams({
        format,
        quality: quality.toString(),
        width: width.toString(),
        height: height.toString(),
        dpr: dpr.toString(),
    });

    return imageUrl ? `${imageUrl}?${params.toString()}` : '';
};