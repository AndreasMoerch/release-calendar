import type React from "react";
import type { LEGOSet } from "../../types/LEGOSet";


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
            <ul>
                {sets.map((set) => (
                    <li key={set.id}>
                        <h3>{set.name} ({set.theme})</h3>
                        <p>Pieces: {set.pieces}</p>
                        <p>Release Date: {set.releaseDate.toDateString()}</p>
                        <p>Price: {set.price.currency} {set.price.amount.toFixed(2)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListView;