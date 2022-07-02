/**
  For Manual Scan in Search Engine Discovery
  */

import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";


export default function SEDReport() {
  const [ markdown, setMarkdown ] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <MDEditor
            value={markdown}
            onChange={setMarkdown}
            height={400}
            autoFocus={true}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
          />
        </div>
      </div>
    </div>
  );
}
