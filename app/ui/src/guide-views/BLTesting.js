import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';

import TBLDVGuidesHelp from '../guide-view-helpers/TBLDVGuidesHelp';
import TAFRGuidesHelp from '../guide-view-helpers/TAFRGuidesHelp';
import TICGuidesHelp from '../guide-view-helpers/TICGuidesHelp';
import TPTGuidesHelp from '../guide-view-helpers/TPTGuidesHelp';
import TNTFGuidesHelp from '../guide-view-helpers/TNTFGuidesHelp';
import TCWGuidesHelp from '../guide-view-helpers/TCWGuidesHelp';
import TDAAMGuidesHelp from '../guide-view-helpers/TDAAMGuidesHelp';
import TUUFTGuidesHelp from '../guide-view-helpers/TUUFTGuidesHelp';
import TUMFGuidesHelp from '../guide-view-helpers/TUMFGuidesHelp';


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

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Test Number of Times a Function Can Be Used Limits</h5>
                <span className="wsId">WSTG-BUSL-05</span><hr/>
                <h6>
                  Attackers may be able to circumvent the business logic and execute a function more times than “allowable” exploiting
                  the application for personal gain.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Function Usage Limits Testing Help & Guide",
                        <TNTFGuidesHelp
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
                        "Report on Function Usage Limits Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-BUSL-05"
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
                <h5 className="mSubTitle">Testing for the Circumvention of Work Flows</h5>
                <span className="wsId">WSTG-BUSL-06</span><hr/>
                <h6>
                  Workflow vulnerabilities involve any type of vulnerability that allows the attacker to misuse an application/system in a
                  way that will allow them to circumvent (not follow) the designed/intended workflow.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Work flows Circumvention Testing Help & Guide",
                        <TCWGuidesHelp
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
                        "Report on Work flows Circumvention Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-BUSL-06"
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
                <h5 className="mSubTitle">Test Defenses Against Application Misuse</h5>
                <span className="wsId">WSTG-BUSL-07</span><hr/>
                <h6>
                  The misuse and invalid use of of valid functionality can identify attacks attempting to enumerate the web application,
                  identify weaknesses, and exploit vulnerabilities
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Defenses Against Application Misuse Testing Help & Guide",
                        <TDAAMGuidesHelp
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
                        "Report on Defenses Against Application Misuse Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-BUSL-07"
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
                <h5 className="mSubTitle">Test Upload of Unexpected File Types</h5>
                <span className="wsId">WSTG-BUSL-08</span><hr/>
                <h6>
                  Check if the unwelcomed file types are rejected and handled safely.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Uploading of Unexpected File Types",
                        <TUUFTGuidesHelp
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
                        "Report on Uploading of Unexpected File Types",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-BUSL-08"
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
                <h5 className="mSubTitle">Test Upload of Malicious Files</h5>
                <span className="wsId">WSTG-BUSL-09</span><hr/>
                <h6>
                  Try to upload the malicious files to the application and determine whether it is accepted and processed.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Malicious Files Upload Testing Guides & Help",
                        <TUMFGuidesHelp
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
                        "Report on Malicious Files Upload Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-BUSL-09"
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
