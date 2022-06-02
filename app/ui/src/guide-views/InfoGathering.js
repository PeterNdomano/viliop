import React, { Component } from 'react';
import NewProject from '../views/NewProject';


export default class InfoGathering extends Component {
  constructor(props) {
    super(props);
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
                  Use search engines to discover sensitive information indexed from the Target Web App
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(true, "Test", <NewProject
                        viliop={this.props.params.viliop}
                        navCallback={this.props.params.navCallback}
                      />)
                    }}
                  >
                    Automated scan
                  </button>

                  <button
                    className="btn btn-sm btn-success text-dark"
                  >
                    Manual Scan
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
