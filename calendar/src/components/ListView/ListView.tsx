import type React from "react";
import type { LEGOSet } from "../../types/LEGOSet";
import { ListCard } from "../ListCard";


interface ListViewProps {
    /**
     * Array of LEGO sets to display in the list view.
     */
    sets: LEGOSet[];
}

/**
 * ListView component to display a list of LEGO sets.
 * @param ListViewProps - Props containing an array of LEGO sets to display.
 * @returns a JSX element rendering a list of LEGO sets with their details.
 */
const ListView: React.FC<ListViewProps> = ({ sets }) => {
    return (
        <div>
            <h2>LEGO Sets List</h2>
                {sets.map((set) => (
                    <ListCard key={set.id} set={set} />
                ))}
        </div>
    );
};

export default ListView;