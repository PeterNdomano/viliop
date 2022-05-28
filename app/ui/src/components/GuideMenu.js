import React, { Component } from 'react';
import GuideMenuItem from '../components/GuideMenuItem';

export default class GuideMenu extends Component {
  render() {
    return (
      <div className="GuideMenu" id="guideMenu">
        <GuideMenuItem/>
        <GuideMenuItem/>
        <GuideMenuItem/>
        <GuideMenuItem/>
        <GuideMenuItem/>
        <GuideMenuItem/>
      </div>
    )
  }
}
