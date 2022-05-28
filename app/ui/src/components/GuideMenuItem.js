import React, { Component } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default class GuideMenuItem extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="GuideMenuItem d-flex">
        <h6 className="align-self-center w-100 mTitle">Menu Title fffffffffffffff d zzz</h6>
        <MdKeyboardArrowRight className="align-self-center mIcon"/>
      </div>
    )
  }
}
