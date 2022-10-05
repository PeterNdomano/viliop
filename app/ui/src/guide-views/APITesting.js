import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';

import TGQLGuidesHelp from '../guide-view-helpers/TGQLGuidesHelp';


export default class WCTesting extends Component {
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
              <h3 className="mTitle">API Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Test the APIs
              </p>
            </div>

            {/* Sub Items */}


            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing GraphQL</h5>
                <span className="wsId">WSTG-APIT-01</span><hr/>
                <h6>
                  GraphQL has become very popular in modern APIs. It provides simplicity and nested objects, which facilitate faster
                  development. While every technology has advantages, it can also expose the application to new attack surfaces.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "GraphQL Testing Help & Guide",
                        <TGQLGuidesHelp
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
                        "Report on GraphQL Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-APIT-01"
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
