import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';

import TBLDVGuidesHelp from '../guide-view-helpers/TBLDVGuidesHelp';
import TAFRGuidesHelp from '../guide-view-helpers/TAFRGuidesHelp';
import TICGuidesHelp from '../guide-view-helpers/TICGuidesHelp';
import TPTGuidesHelp from '../guide-view-helpers/TPTGuidesHelp';


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

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Test Ability to Forge Requests</h5>
                <span className="wsId">WSTG-BUSL-02</span><hr/>
                <h6>
                  Forging requests is a method that attackers use to circumvent the front end GUI application to directly submit
                  information for back end processing. The goal of the attacker is to send HTTP POST/GET requests through an
                  intercepting proxy with data values that is not supported, guarded against or expected by the applications business
                  logic
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Ability to Forge Requests Testing Help & Guide",
                        <TAFRGuidesHelp
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
                        "Report on Ability to Forge Requests Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-BUSL-02"
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
                <h5 className="mSubTitle">Test Integrity Checks</h5>
                <span className="wsId">WSTG-BUSL-03</span><hr/>
                <h6>
                  Many applications are designed to display different fields depending on the user of situation by leaving some inputs
                  hidden. However, in many cases it is possible to submit values hidden field values to the server using a proxy.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Integrity Checks Testing Help & Guide",
                        <TICGuidesHelp
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
                        "Report on Integrity Checks Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-BUSL-03"
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
                <h5 className="mSubTitle">Test for Process Timing</h5>
                <span className="wsId">WSTG-BUSL-04</span><hr/>
                <h6>
                  It is possible that attackers can gather information on an application by monitoring the time it takes to complete a task or
                  give a respond. Additionally, attackers may be able to manipulate and break designed business process flows by
                  simply keeping active sessions open and not submitting their transactions in the “expected” time frame
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Process Timing Testing Help & Guide",
                        <TPTGuidesHelp
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
                        "Report on Process Timing Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-BUSL-04"
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
