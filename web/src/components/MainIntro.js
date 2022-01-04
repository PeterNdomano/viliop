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
              color: "var(--primaryColor)",
            }}>Project Manager</span> <br/> For
            <span style={{
              fontFamily: "sans"
            }}>&nbsp;&lt;Software/&gt;&nbsp;</span>
            Development
            Projects</h6>

            <div
              style={{
                width: "100%",
                height: "5px",
                marginTop: "20px",
                marginBottom: "20px",
                backgroundColor: "var(--primaryColor)",
              }}
            >
            </div>

            <div
              className="text-left"
              style={{
                width: "100%",
              }}
            >
              <button className="btn"> Sign In <MdLogin/>  </button>
              &nbsp;&nbsp;
              <button className="btn"> Sign Up <MdLogin/>  </button>
              <hr/>

            </div>

            <div
              className="text-left"
              style={{
                width: "100%",
              }}
            >
              <h6>
                Open Source & Completely Free <br/>
              </h6>
              <h6>
                <button className="btn btn-sm">Fork</button>
                &nbsp;Or&nbsp;
                <button className="btn btn-sm">Star</button>
                &nbsp;on Github
              </h6>


            </div>
          </div>
          <h6
            style={{
              position: 'absolute',
              bottom: '0px',
              right: '10px',
              fontSize: '14px',
            }}
          >
            <a href="https://github.com/PeterNdomano">&copy;PeterNdomano</a>
          </h6>
        </div>

      </div>
    );
  }
}

export default MainIntro;
