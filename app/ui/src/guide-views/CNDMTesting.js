import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';
import TNICGuidesHelp from '../guide-view-helpers/TNICGuidesHelp';


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
              <h3 className="mTitle">Configuration and Deployment Management Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Test how various related components, services and networks are configured
                and deployed
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Test Network Infrastructure Configuration</h5>
                <span className="wsId">WSTG-CONF-01</span><hr/>
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
