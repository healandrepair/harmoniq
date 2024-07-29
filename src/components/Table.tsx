import React from "react";

function Table(items: Array<object>) {
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



export default Table;