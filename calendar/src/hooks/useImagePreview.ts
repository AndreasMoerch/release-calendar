import { useState } from "react";

interface MousePosition {
    x: number;
    y: number;
}

interface UseImagePreviewReturn {
    shouldPreviewImage: boolean;
    mousePosition: MousePosition;
    handleMouseEnter: (e: React.MouseEvent) => void;
    handleMouseLeave: () => void;
}

/**
 * Hook for managing image preview on hover.
 * @returns Object containing showImage state, mousePosition, and event handlers
 */
export function useImagePreview(): UseImagePreviewReturn {
    const [shouldPreviewImage, setShouldPreviewImage] = useState(false);
    // Track mouse position for image preview placement.
    // X and Y coordinates relative to viewport when mouse enters the mouse triggers enter event.
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    const handleMouseEnter = (e: React.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setShouldPreviewImage(true);
    };

    const handleMouseLeave = () => {
        setShouldPreviewImage(false);
    };

    return {
        shouldPreviewImage: shouldPreviewImage,
        mousePosition: mousePosition,
        handleMouseEnter,
        handleMouseLeave,
    };
}