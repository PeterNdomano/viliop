import React, { Component } from 'react';
import GuideMenuItem from '../components/GuideMenuItem';

export default class GuideMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      readyState: false,
    }

    this.menu = '';
  }

  componentDidMount() {
    this.parseMenu(this.props.viliop.guide, this.props)
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.parseMenu(props.viliop.guide, props)
  }

  parseMenu = (guide, props) => {

    this.menu = guide.menu.map((item, i) => {
      return (
        <GuideMenuItem
          key={i}
          title={item.title}
          viewId={item.viewId}
          workspaceViewCallback={props.workspaceViewCallback}
          workspaceViewId={props.workspaceViewId}
        />
      )
    })
    this.setState((prevState) => {
      return {
        readyState: !prevState.readyState,
      }
    })
  }

  render() {
    return (
      <div className="GuideMenu" id="guideMenu">
        {this.menu}
      </div>
    )
  }
}
