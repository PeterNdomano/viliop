/**
  For Automatic Scan in Search Engine Discovery
  */

import React, { Component } from 'react';

export default function RWMGuidesHelp(props){

  let viliop = props.viliop;
  let project = viliop.currentProject;


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="helpTitle">Intro:</h3>
            Test various metadata files for information leakage of the web application’s path(s), or
            functionality. Furthermore, the list of directories that are to be avoided by Spiders, Robots, or Crawlers can also be
            created as a dependency for Map execution paths through application. Other information may also be collected to
            identify attack surface, technology details, or for use in social engineering engagement.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Access target's <span className="codeText">robots.txt</span> file to discover which files & folders
              are allowed for search engine indexing and which are not. This file may be available at
              <span className="linkText">http://{project.config.targetUrl}/robots.txt</span>. That information may be useful in
              Mapping execution paths
            </li>
            <li>Analyze <span className="codeText">robots.txt</span> Using Google Webmaster Tools</li>
            <li>Analyze <span className="codeText">meta</span> tags for this Web App</li>
            <li>
              Analyze <span className="codeText">sitemap.xml</span> file if available,
              it may be available at
              <span className="linkText">http://{project.config.targetUrl}/sitemap.xml</span>
            </li>
            <li>
              Analyze <span className="codeText">security.txt</span> file if available,
              it may be available at <span className="linkText">http://{project.config.targetUrl}/security.txt</span>
              or at <span className="linkText">http://{project.config.targetUrl}/.well-known/security.txt</span>
            </li>
            <li>
              Analyze <span className="codeText">humans.txt</span> file, it may be available at
              <span className="linkText">http://{project.config.targetUrl}/humans.txt</span>
            </li>
            <li>
              Analyze files in <span className="codeText">.well-known</span> folder of this site
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          You may use your Browser (Firefox or Chrome), curl, wget, Burp Suite and
          ZAP
          <hr/>
        </div>
      </div>
    </div>
  )
}
