/**
  For Manual Scan in Search Engine Discovery
  */

import React, { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from "rehype-sanitize";
import { sanitizeMarkdown, tellUser } from '../Helper';


export default function Reporter( props ) {
  //console.log(props.viliop.currentProject);

  //const ID = "WSTG-INFO-02";
  let viliop = props.viliop;
  const [ project, setProject ] = useState(props.viliop.currentProject)
  const [ markdown, setMarkdown ] = useState("");
  const [ ID, setID ] = useState(props.ID);

  useEffect(() => {
    initialize(props.ID);
  }, [props.ID]);

  useEffect(() => {
    setProject(props.viliop.currentProject);
  }, [ props.viliop.currentProject ])

  const initialize = async (ID) => {
    setID(ID)
    await getReport(ID);
  }

  const getReport = async (ID) => {
    await project.getReport(ID).then(content => {
      setMarkdown(content);
    });

  }

  let save = async () => {
    let md = sanitizeMarkdown(markdown);
    if( md.trim().length > 0 ) {
      await project.saveReport(ID, md).then((status) => {
        if( status === true ) {
          tellUser( "Report was saved successfully", "success" );
        } else {
          tellUser( "Could not save report, file access error" );
        }
      });
    } else {
      tellUser( "Invalid content" );
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <MDEditor
            value={markdown}
            onChange={setMarkdown}
            height={250}
            autoFocus={true}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]],
            }}
          />
          <hr/>
          <div className="text-right">
            <button
              className="btn btn-warning text-dark"
              onClick={save}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );


}
