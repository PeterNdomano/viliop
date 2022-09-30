import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';

import TSSRFGuidesHelp from '../guide-view-helpers/TSSRFGuidesHelp';


export default class CNDMTesting extends Component {
  constructor(props) {
    super(props);
    this.project = props.params.viliop.currentProject;
    this.viliop = props.params.viliop;
  }

  render() {
    return (
      <div className="GuideView">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="mTitle">Input Validation Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Test user input handling on <span className="linkText">{this.project.config.targetUrl}</span>
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing for Server-Side Request Forgery</h5>
                <span className="wsId">WSTG-INPV-19</span><hr/>
                <h6>
                  Identify SSRF injection points
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Server-Side Request Forgery Testing Help & Guide",
                        <TSSRFGuidesHelp
                          viliop={this.props.params.viliop}
                      />);
                    }}
                  >
                    Guides & Help
                  </button>

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Report on Server-Side Request Forgery Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-19"
                      />);
                    }}
                  >
                    Report
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
