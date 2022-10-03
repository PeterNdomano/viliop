import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';

import TBLDVGuidesHelp from '../guide-view-helpers/TBLDVGuidesHelp';


export default class BLTesting extends Component {
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
              <h3 className="mTitle">Business Logic Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Testing of business logic flaws is similar to the test types used by functional testers that focus on logical or finite state
                testing. These types of tests require that security professionals think a bit differently, develop abused and misuse cases
                and use many of the testing techniques embraced by functional testers
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Test Business Logic Data Validation</h5>
                <span className="wsId">WSTG-BUSL-01</span><hr/>
                <h6>
                  The application must ensure that only logically valid data can be entered at the front end as well as directly to the
                  server-side of an application of system. Only verifying data locally may leave applications vulnerable to server
                  injections through proxies or at handoffs with other systems.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Business Logic Data Validation Testing Help & Guide",
                        <TBLDVGuidesHelp
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
                        "Report on Business Logic Data Validation Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-BUSL-01"
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
