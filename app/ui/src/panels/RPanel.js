import React, { Component } from 'react';
import { getRPanelView } from '../ViewsResolver';
import $ from 'jquery';

export default class RPanel extends Component {
  constructor(props) {
    super(props);
    this.view = <div></div>;
    this.state = {
      viewChange: false,
    }
  }

  componentDidMount() {
    this.handleDisplay(this.props)
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.handleDisplay(props)
  }

  handleDisplay = (props) => {
    if(props.navItem === "project" && props.navSubItem === "current_project") {
      document.getElementById('rPanel').style.left = "100vw"
      try {
        $('#guideMenu').fadeIn('slow');
      } catch (e) {
        //guideMenu not available yet
      }
    }
    else {
      
      //get view
      this.view = getRPanelView( props );
      this.setState((prevState) => {
        return {
          viewChange: !prevState.viewChange, //just to cause re-render
        }
      }, () => {
        document.getElementById('rPanel').style.left = "var(--pTabWidth)";
        document.getElementById('rPanel').children[0].focus();
        try {
          $('#guideMenu').fadeOut('slow');
        } catch (e) {
          //guideMenu not available yet
        }
      })

    }
  }



  render() {
    return (
      <div className="RPanel" id="rPanel">
        {this.view}
      </div>
    )
  }
}
