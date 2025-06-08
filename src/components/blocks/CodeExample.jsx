// En: src/components/blocks/CodeExample.jsx
import React from 'react';
import BlockWrapper from './BlockWrapper';

const CodeExample = ({ type, title, language, code }) => {
  return (
    <BlockWrapper type={type}>
      <div className="code-example">
        <p className="code-example-title">{title}</p>
        <pre className="code-block">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </BlockWrapper>
  );
};

export default CodeExample;