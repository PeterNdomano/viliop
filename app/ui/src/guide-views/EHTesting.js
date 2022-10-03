import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';

import TIEHGuidesHelp from '../guide-view-helpers/TIEHGuidesHelp';


export default class EHTesting extends Component {
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
              <h3 className="mTitle">Testing for Error Handling</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Check if Application's error handling mechanisms reveal sensitive information
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing for Improper Error Handling</h5>
                <span className="wsId">WSTG-ERRH-01</span><hr/>
                <h6>
                  Improper error handling can help the attackers figure out how internal APIs work.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Improper Error Handling Testing Help & Guide",
                        <TIEHGuidesHelp
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
                        "Report on Improper Error Handling Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-ERRH-01"
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
