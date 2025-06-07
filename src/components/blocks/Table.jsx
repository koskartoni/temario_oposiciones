import React from 'react';
import BlockWrapper from './BlockWrapper';

const Table = ({ type, headers, rows }) => {
  return (
    <BlockWrapper type={type}>
      <table>
        <thead>
          <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}
        </tbody>
      </table>
    </BlockWrapper>
  );
};

export default Table;