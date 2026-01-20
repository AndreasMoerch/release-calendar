import type { Set } from "../../types/Set";
import { FaExternalLinkAlt, FaImage } from "react-icons/fa";
import { createPortal } from "react-dom";
import { useImagePreview } from "../../hooks/useImagePreview";
import './ListViewItem.css';
import { generateUrlForSet } from "../../utils/setUtils";
import { formatPriceWithCurrency } from "../../utils/priceFormatter";
import { getOptimizedImageUrl } from "../../utils/imagePreviewOptimizer";

interface ListViewItemDetailsProps {
    /**
     * Single non-null set to display.
     */
    set: Set
}

/**
 * ListViewItemDetails component to display details of a single set.
 * @param ListViewItemDetailsProps - Props containing a set to display.
 * @returns a JSX element rendering the details of the set.
 */
const ListViewItemDetails: React.FC<ListViewItemDetailsProps> = ({ set }) => {
    const { shouldPreviewImage: showImage, mousePosition, handleMouseEnter, handleMouseLeave } = useImagePreview();
    
    const priceWithCurrency = formatPriceWithCurrency(set);
    const setUrl = generateUrlForSet(set);
    const imageUrl = getOptimizedImageUrl(set.imageUrl);
    
    return (
        <div className="card-content">
            <span className="card-set-number">#{set.id}</span>
            <span className="card-name">{set.name}</span>
            <span className="card-theme">{set.theme}</span>
            <span className="card-pieces">{set.pieces} pieces</span>
            <span className="card-price">{priceWithCurrency}</span>
            <span
                className="card-image-icon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Render icon if present, render empty string if not - to keep CSS happy (not happy if whole span is not rendered) */}
                {set.imageUrl ? <FaImage /> : ''}
            </span>
            <a
                className="card-url"
                href={setUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={setUrl}
            >
                LEGO.com&nbsp;
                <FaExternalLinkAlt title={setUrl} />
            </a>
            {/* Render overlay image preview just below mouse (fixed) position. */}
            {showImage && set.imageUrl && createPortal(
                <div 
                    className="card-image-preview"
                    style={{
                        top: mousePosition.y + 10,
                        left: mousePosition.x + 10,
                    }}
                >
                    <img src={imageUrl} alt={set.name} />
                </div>,
                document.body
            )}
        </div>
    );
};

export default ListViewItemDetails;