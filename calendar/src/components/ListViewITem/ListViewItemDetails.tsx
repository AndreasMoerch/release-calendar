import type { LEGOSet } from "../../types/LEGOSet";
import { formatPriceWithCurrency } from "../../utils/priceFormatter";
import { generateUrlForSet } from "../../utils/setUtils";
import { FaExternalLinkAlt } from "react-icons/fa";
import './ListViewItem.css';

interface ListViewItemDetailsProps {
    /**
     * Single non-null LEGO set to display.
     */
    set: LEGOSet
}

/**
 * ListViewItemDetails component to display details of a single LEGO set.
 * @param ListViewItemDetailsProps - Props containing a LEGO set to display.
 * @returns a JSX element rendering the details of the LEGO set.
 */
const ListViewItemDetails: React.FC<ListViewItemDetailsProps> = ({ set }) => {

    const priceWithCurrency = formatPriceWithCurrency(set);
    const setUrl = generateUrlForSet(set);

    return (
        <div className="card-content">
            <span className="card-set-number">#{set.id}</span>
            <span className="card-name">{set.name}</span>
            <span className="card-theme">{set.theme}</span>
            <span className="card-pieces">{set.pieces} pieces</span>
            <span className="card-price">{priceWithCurrency}</span>
            <a
                className="card-url"
                href={setUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={setUrl}
            >
                LEGO.com&nbsp;
                <FaExternalLinkAlt title={setUrl}/>
            </a>
        </div>
    );
};

export default ListViewItemDetails;