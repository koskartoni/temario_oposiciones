import React from 'react';
const ResourceLink = ({ name, url, description }) => (
  <div className="resource-link">
    <strong><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></strong>
    <p>{description}</p>
  </div>
);
export default ResourceLink;