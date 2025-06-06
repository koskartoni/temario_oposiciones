// En: src/components/blocks/SimpleList.jsx
import React from 'react';

const SimpleList = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default SimpleList;