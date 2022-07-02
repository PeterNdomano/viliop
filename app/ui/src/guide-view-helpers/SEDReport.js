/**
  For Manual Scan in Search Engine Discovery
  */

import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

export default function SEDReport() {
  const [ markdown, setMarkdown ] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <MDEditor
            value={markdown}
            onChange={setMarkdown}
          />
          <MDEditor.Markdown source={markdown} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
      </div>
    </div>
  );
}
