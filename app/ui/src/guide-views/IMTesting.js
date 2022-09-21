import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';
import TNICGuidesHelp from '../guide-view-helpers/TNICGuidesHelp';
import TAPCGuidesHelp from '../guide-view-helpers/TAPCGuidesHelp';
import TFEHGuidesHelp from '../guide-view-helpers/TFEHGuidesHelp';
import ROBUFGuidesHelp from '../guide-view-helpers/ROBUFGuidesHelp';
import EIAAIGuidesHelp from '../guide-view-helpers/EIAAIGuidesHelp';
import THMGuidesHelp from '../guide-view-helpers/THMGuidesHelp';
import THSTSGuidesHelp from '../guide-view-helpers/THSTSGuidesHelp';
import TRCDPGuidesHelp from '../guide-view-helpers/TRCDPGuidesHelp';
import TFPGuidesHelp from '../guide-view-helpers/TFPGuidesHelp';
import TSTGuidesHelp from '../guide-view-helpers/TSTGuidesHelp';
import TCSGuidesHelp from '../guide-view-helpers/TCSGuidesHelp';


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
              <h3 className="mTitle">Identity Management Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Test how user identities are managed on this target
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Test Role Definitions</h5>
                <span className="wsId">WSTG-IDNT-01</span><hr/>
                <h6>
                  Review network configurations for applications, services, webservers and database servers
                  related to <span className="linkText">{this.project.config.targetUrl}</span>

                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Network Infrastructure Configuration Testing Help & Guide",
                        <TNICGuidesHelp
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
                        "Report on Network Infrastructure Configuration Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CONF-01"
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
