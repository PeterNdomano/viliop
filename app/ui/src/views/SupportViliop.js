import React, { Component } from 'react';
import { tellUser, sanitizePathString, getInlineLoader, sanitizeUrl } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default class View extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="panelTitle">Support Viliop</h1>
            <h5 className="font-light text-muted">
              We'll be glad for any support be it technical, financial or just ideas
            </h5>
            <small className="text-light">-Peter Ndomano</small><br/>
            <small className="text-info">https://peterndomano.dev/viliop</small>
          </div>
        </div>
      </div>
    )
  }
}
