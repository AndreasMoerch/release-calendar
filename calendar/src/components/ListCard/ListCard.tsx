import type { LEGOSet } from "../../types/LEGOSet";
import { formatReleaseDay, formatReleaseDayName, formatReleaseMonthName } from "../../utils/releaseDateFormatter";
import { formatPriceWithCurrency } from "../../utils/priceFormatter";
import './ListCard.css';
import { generateUrlForSet } from "../../utils/setUrlGenerator";

interface ListCardProps {
    /**
     * Single non-null LEGO set to display.
     */
    set: LEGOSet
}

/**
 * ListCard component to display details of a single LEGO set.
 * @param ListCardProps - Props containing a LEGO set to display.
 * @returns a JSX element rendering the details of the LEGO set.
 */
const ListCard: React.FC<ListCardProps> = ({ set }) => {

    const releaseDay = formatReleaseDay(set);
    const releaseMonthName = formatReleaseMonthName(set);
    const releaseDayName = formatReleaseDayName(set);
    const priceWithCurrency = formatPriceWithCurrency(set);

    return (
        <div className="card">
            <div className="card-date">
                <span className="card-date-number">{releaseDay} - {releaseMonthName} </span>
                <span className="card-date-day">{releaseDayName}</span>
            </div>

            <div className="card-content">
                <span className="card-name">{set.name}</span>
                <span className="card-theme">{set.theme}</span>
                <span className="card-pieces">{set.pieces} pieces</span>
                <a href={generateUrlForSet(set)} className="card-url">{generateUrlForSet(set)}</a>
                <span className="card-price">{priceWithCurrency}</span>
            </div>
        </div>
    );
};

export default ListCard;