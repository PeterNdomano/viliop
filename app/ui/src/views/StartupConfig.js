import React, { Component } from 'react';
import ViliopInfo from './ViliopInfo';
import ConfigSetting from './ConfigSetting';
import { tellUser, sanitizePathString, getInlineLoader, sanitizeUrl } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default class StartupConfig extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="Main">
        <div className="leftWing">
          <ViliopInfo/>
        </div>
        <div className="rightWing">
          <ConfigSetting restartApp={this.props.restartApp} viliop={this.props.viliop} />
        </div>
      </div>
    )
  }
}
