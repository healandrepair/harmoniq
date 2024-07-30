import React from "react";

function ListOfSongs(items: Array<object>) {
    return (
        <ul>
            {items.map((item, data) => (
                <li key={data}>
                    {item.name} - {item.value}
                </li>
            ))}
        </ul>
    );
};



export default ListOfSongs;