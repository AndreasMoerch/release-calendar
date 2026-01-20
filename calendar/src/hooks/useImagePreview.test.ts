import { renderHook, act } from "@testing-library/react";
import { useImagePreview } from "./useImagePreview";

describe("useImagePreview", () => {
    it("should initialize with shouldPreviewImage as false and default mouse position", () => {
        const { result } = renderHook(() => useImagePreview());

        expect(result.current.shouldPreviewImage).toBe(false);
        expect(result.current.mousePosition).toEqual({ x: 0, y: 0 });
    });

    it("should set shouldPreviewImage to true and update mouse position on mouse enter", () => {
        const { result } = renderHook(() => useImagePreview());

        const mockEvent = {
            clientX: 150,
            clientY: 250,
        } as React.MouseEvent;

        act(() => {
            result.current.handleMouseEnter(mockEvent);
        });

        expect(result.current.shouldPreviewImage).toBe(true);
        expect(result.current.mousePosition).toEqual({ x: 150, y: 250 });
    });

    it("should set shouldPreviewImage to false on mouse leave", () => {
        const { result } = renderHook(() => useImagePreview());

        const mockEvent = {
            clientX: 100,
            clientY: 200,
        } as React.MouseEvent;

        act(() => {
            result.current.handleMouseEnter(mockEvent);
        });

        expect(result.current.shouldPreviewImage).toBe(true);

        act(() => {
            result.current.handleMouseLeave();
        });

        expect(result.current.shouldPreviewImage).toBe(false);
        expect(result.current.mousePosition).toEqual({ x: 100, y: 200 });
    });
});
