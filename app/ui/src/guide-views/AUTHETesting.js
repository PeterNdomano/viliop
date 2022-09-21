import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';
import TCTECGuidesHelp from '../guide-view-helpers/TCTECGuidesHelp';


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
              <h3 className="mTitle">Authentication Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Test Authentication mechanism(s) on <span className="linkText">{this.project.config.targetUrl}</span>
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing for Credentials Transported over an Encrypted Channel</h5>
                <span className="wsId">WSTG-ATHN-01</span><hr/>
                <h6>
                  Determine whether  this web app encrypts authentification data in transit.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Authentication Credentials Transport Channel Testing Help & Guide",
                        <TCTECGuidesHelp
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
                        "Report on Authentication Credentials Transport Channel Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-ATHN-01"
                      />);
                    }}
                  >
                    Report
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing for Credentials Transported over an Encrypted Channel</h5>
                <span className="wsId">WSTG-ATHN-01</span><hr/>
                <h6>
                  Determine whether  this web app encrypts authentification data in transit.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Authentication Credentials Transport Channel Testing Help & Guide",
                        <TCTECGuidesHelp
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
                        "Report on Authentication Credentials Transport Channel Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-ATHN-01"
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
