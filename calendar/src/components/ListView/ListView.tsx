import type React from "react";
import type { Set } from "../../types/Set";
import { ListViewItem } from "../ListViewItem";
import { setReleasesAfterDateFilter, groupByReleaseDateSorted } from "../../utils/setUtils";
import { useSelectDate } from "../../hooks/useSelectDate";
import './ListView.css';

interface ListViewProps {
    /**
     * Array of sets to display in the list view.
     */
    sets: Set[];
}

/**
 * ListView component to display a list of sets.
 * @param ListViewProps - Props containing an array of sets to display.
 * @returns a JSX element rendering a list of sets with their details.
 */
const ListView: React.FC<ListViewProps> = ({ sets }) => {

    const [selectedDate, setSelectedDate] = useSelectDate();

    const filteredSetsByReleaseDate = groupByReleaseDateSorted(
        setReleasesAfterDateFilter(sets, new Date(selectedDate))
    );

    return (
        <div>
            <div className="data-selector">
                <label htmlFor="date-filter">Show sets releasing on or after: </label>
                <input
                    id="date-filter"
                    type="date"
                    value={selectedDate}
                    onChange={event => setSelectedDate(event.target.value)}
                />
            </div>
            {Object.entries(filteredSetsByReleaseDate)
                .map(([releaseDateString, sets]) => {
                    const releaseDate = new Date(releaseDateString);
                    return <ListViewItem key={releaseDateString} sets={sets} releaseDate={releaseDate} />
                })}
        </div>
    );
};

export default ListView;