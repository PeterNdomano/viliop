import React, { Component } from 'react';
import { MdPerson } from 'react-icons/md';
export default class TTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TTab" id="tTab">
        <div className="container-fluid" style={{ height:"100%" }}>
          <div className="d-flex flex-row" style={{ height:"100%" }}>
            <div className="menuItem align-self-center text-center">
              <MdPerson className="mIcon"/>
              <p className="mTitle">Project</p>
            </div>
            <div className="menuItem align-self-center text-center">
              <MdPerson className="mIcon"/>
              <p className="mTitle">Tools</p>
            </div>
            <div className="menuItem align-self-center text-center">
              <MdPerson className="mIcon"/>
              <p className="mTitle">Reporting</p>
            </div>
            <div className="menuItem align-self-center text-center">
              <MdPerson className="mIcon"/>
              <p className="mTitle">Settings</p>
            </div>
            <div className="menuItem align-self-center text-center">
              <MdPerson className="mIcon"/>
              <p className="mTitle">More</p>
            </div>
            <div className="headItem flex-grow-1 text-right">
              <h3 className="appTitle">Viliop_</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
