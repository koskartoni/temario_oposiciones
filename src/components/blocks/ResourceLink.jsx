import React from 'react';
import BlockWrapper from './BlockWrapper';

const ResourceLink = ({ type, name, url, description }) => {
  return (
    <BlockWrapper type={type}>
      <div className="resource-link">
        <strong><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></strong>
        <p>{description}</p>
      </div>
    </BlockWrapper>
  );
};

export default ResourceLink;