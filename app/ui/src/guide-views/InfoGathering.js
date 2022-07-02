import React, { Component } from 'react';
import NewProject from '../views/NewProject';
import SEDReport from '../guide-view-helpers/SEDReport';
import AutoScanSED from '../guide-view-helpers/AutoScanSED';
import SEDGuidesHelp from '../guide-view-helpers/SEDGuidesHelp';


export default class InfoGathering extends Component {
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
              <h3 className="mTitle">Information Gathering</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Collect sensitive information for this website from various sources on the Web that may lead to
                successful attack.
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Search Engine Discovery</h5>
                <h6>
                  Use search engines to discover sensitive information indexed and/or leaked from {this.project.config.targetUrl}.
                  You can use guides below and save your finding for reference and further extension of your work
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Search Engine Reconnaissance Help & Guide",
                        <SEDGuidesHelp
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
                        "Report on Search Engine Reconnaissance",
                        <SEDReport
                          viliop={this.props.params.viliop}
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
