import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import Banner from './Banner';

export default function MainBody(props) {
  const appContext = useContext(AppContext);
  

  if(!appContext.navItem && !appContext.navSubItem && !appContext.navExtraItem) {
    //its homepage
    return (
      <div className='MainBody'>
        <Banner/>
      </div>
    )
  } else {
    //get view to show
    if(appContext.navItem === 'download') {
      return (
        <div className='MainBody'>
          <Banner/>
        </div>
      )
    } else if(appContext.navItem === 'sponsor') {
      return (
        <div className='MainBody'>
          <Banner/>
        </div>
      )
    } else {
      return (
        <div className='MainBody'>
          <Banner/>
          
        </div>
      )
    }
  }
}
