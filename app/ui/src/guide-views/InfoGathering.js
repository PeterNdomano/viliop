import React, { Component } from 'react';


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
                Info about this section
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
