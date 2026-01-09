import type { Set } from "../../types/Set";
import { formatDayName, formatMonthName, formatDayNumber } from "../../utils/dateFormatter";
import { sortByTheme } from "../../utils/setUtils";
import ListViewItemDetails from "./ListViewItemDetails";
import './ListViewItem.css';

interface ListViewItemProps {
    /**
     * Non-empty list of sets to releasing on the same day.
     */
    sets: Set[]

    /**
     * Non-null release date for the sets.
     */
    releaseDate: Date;
}

/**
 * ListViewItem component to display details of multiple sets for a specific release date.
 * @param ListViewItemProps - Props containing a set to display.
 * @returns a JSX element rendering the details of the set.
 */
const ListViewItem: React.FC<ListViewItemProps> = ({ releaseDate, sets }) => {

    const releaseDay = formatDayNumber(releaseDate);
    const releaseMonthName = formatMonthName(releaseDate);
    const releaseDayName = formatDayName(releaseDate);

    const sortedSets = sortByTheme(sets);

    return (
        <div className="card">

            <div className="card-date">
                <span className="card-date-number">{releaseDay} - {releaseMonthName} </span>
                <span className="card-date-day">{releaseDayName}</span>
                <span className="card-date-sets-count">{sets.length} set{sets.length > 1 ? 's' : ''}</span>
            </div>

            <div className="card-date-content">
                {sortedSets.map((set) => (
                    <ListViewItemDetails set={set} />
                ))}
            </div>
        </div>
    );
};

export default ListViewItem;