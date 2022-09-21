import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';
import TRDGuidesHelp from '../guide-view-helpers/TRDGuidesHelp';


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
                Test how user identities are managed on <span className="linkText">{this.project.config.targetUrl}</span>
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Test Role Definitions</h5>
                <span className="wsId">WSTG-IDNT-01</span><hr/>
                <h6>
                  Identify roles found on this target
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Role Definitions Testing Help & Guide",
                        <TRDGuidesHelp
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
                        "Report on Role Definitions Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-IDNT-01"
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
