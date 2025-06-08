// En: src/components/blocks/CodeBlock.jsx
import React from 'react';
import BlockWrapper from './BlockWrapper';

const CodeBlock = ({ type, language, code }) => {
  return (
    <BlockWrapper type={type}>
      <pre className="code-block">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </BlockWrapper>
  );
};

export default CodeBlock;