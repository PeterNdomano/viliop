import React, { Component } from 'react';
import { MdLogin } from 'react-icons/md';
import $ from 'jquery';
import { MAIN_URL, tellUser } from '../Helper';
import MyProjects from '../body_divs/MyProjects';


class MainBody extends Component {

  constructor(props){
    super(props);
  }

  renderMyProjects(){
    return (
      <div className="MainBody openedMainBody" id="mainBody">
        <div className="container">
          <MyProjects showLoader={this.props.showLoader} navCallback={this.props.navCallback}/>
        </div>
      </div>
    );
  }



  render() {
    switch (this.props.navTo) {
      case 'my_projects':
        return this.renderMyProjects()
        break;

      default:
        return (<div></div>);
        break;
    }
  }
}

export default MainBody;
