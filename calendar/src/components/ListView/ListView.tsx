import type React from "react";
import type { Set } from "../../types/Set";
import { ListViewItem } from "../ListViewItem";
import { setReleasesAfterDateFilter, groupByReleaseDateSorted } from "../../utils/setUtils";

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

    // Sets released in the future, then grouped by release date
    // @todo: Add functionality to select different date filters when needed.
    const futureSetsByReleaseDate = groupByReleaseDateSorted(
        setReleasesAfterDateFilter(sets, new Date())
    );

    return (
        <div>
            {Object.entries(futureSetsByReleaseDate)
                .map(([releaseDateString, sets]) => {
                    const releaseDate = new Date(releaseDateString);
                    return <ListViewItem key={releaseDateString} sets={sets} releaseDate={releaseDate} />
                })}
        </div>
    );
};

export default ListView;