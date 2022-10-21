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
            <h1 className="panelTitle">About</h1>
            <h5 className="font-reg text-muted">
              Viliop is the Software Project aimed at creating an Integrated Penetration Testing Environment....
            </h5>
            <small className="text-light">-Peter Ndomano</small><br/>
            <small className="text-info">https://peterndomano.dev/viliop</small>
          </div>
        </div>
      </div>
    )
  }
}
