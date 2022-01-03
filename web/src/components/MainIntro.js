import React, { Component } from 'react';
import { MdLogin } from 'react-icons/md';
import $ from 'jquery';
import toast from 'siiimple-toast';
import { MAIN_URL } from '../Helper';
import logo from '../logo.png';


class MainIntro extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="MainIntro">
        <div className="logoBox">
          <img src={logo} />
        </div>
        <div className="introBox">
          <div className="introText text-right">
            <h6><span style={{
              fontSize: "60px",
              fontWeight: "400",
              fontFamily: "Rubik",
            }}>Project Manager</span> <br/> For
            <span style={{
              fontFamily: "sans"
            }}>&nbsp;&lt;Software/&gt;&nbsp;</span>
            Development
            Projects</h6>

            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "var(--secondaryColor)",
              }}
            >
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainIntro;
