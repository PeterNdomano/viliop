/**
  For Automatic Scan in Search Engine Discovery
  */

import React, { Component } from 'react';

export default class SEDGuidesHelp extends Component {
  constructor(props){
    super(props);
    this.project = props.viliop.currentProject;
    this.viliop = props.viliop;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="helpTitle">Intro:</h3>
            Use search engines to search for potentially sensitive information including (but not limited to)
            <ul>
              <li>Network diagrams and configurations</li>
              <li>archived posts and emails by administrators or other key staff</li>
              <li>logon procedures and username formats;</li>
              <li>usernames, passwords, and private keys;</li>
              <li>third-party, or cloud service configuration files;</li>
              <li>revealing error message content; and</li>
              <li>development, test, User Acceptance Testing (UAT), and staging versions of sites.</li>
            </ul>
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tips & How:</h3>
            <ul>
              <li>Do not limit yourself to one search engine provider, different engines produce different results</li>
              <li>Use search engine operators like:</li>
              <ol>
                <li><span className="codeText">site:{this.project.config.targetUrl}</span> - will limit search to only to this site</li>
                <li><span className="codeText">cache:{this.project.config.targetUrl}</span> - will search for content that has previously been indexed and cached in the past</li>
                <li><span className="codeText">inurl:</span> - will only return results that include the keyword in the URL</li>
                <li><span className="codeText">intitle:</span> - will only return results that have the keyword in the page title</li>
                <li><span className="codeText">intext:</span> or <span className="codeText">:inbody</span> - will only search for the keyword in the body of pages</li>
                <li><span className="codeText">filetype:</span> - will match only a specific filetype, i.e. png, or php</li>
              </ol>
              <li>Use Google hacking or Dorking: This invloves utilizing a database of dorks such as <span className="codeText">Google Hacking Database</span> and others at <span className="linkText">www.exploit-db.com</span></li>
            </ul>
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tools:</h3>
            Search engines such as Google, Bing, Baidu, binsearch.info, DuckDuckGo, Common Crawl, Internet Archive Wayback Machine, StartPage, Shodan etc.....
            <hr/>
          </div>
        </div>
      </div>
    )
  }
}
