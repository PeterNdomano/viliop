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
            <h6>Proxy, Intruder and Repeater will be supported in the coming versions of Viliop</h6>
          </div>
        </div>
      </div>
    )
  }
}
