import React from 'react';
const Bibliography = ({ items }) => (
  <ul className="bibliography-list">
    {items.map((item, index) => (
      <li key={index}>
        {item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.text}</a> : item.text}
      </li>
    ))}
  </ul>
);
export default Bibliography;