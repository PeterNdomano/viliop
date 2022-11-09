import React, { useState, createContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import AOS from 'aos';

export const AppContext = createContext(null);

export default function App() {
  const { _navItem, _navSubItem, _navExtraItem } = useParams();
  const [ navItem, setNavItem ] = useState(_navItem);
  const [ navSubItem, setNavSubItem ] = useState(_navSubItem);
  const [ navExtraItem, setNavExtraItem ] = useState(_navExtraItem);

  const appContext= {
    navItem,
    navSubItem,
    navExtraItem,
  }

  useEffect(() => {
    AOS.init();
  }, [ ]);

  useEffect(() => {
    setNavItem(_navItem);
    setNavSubItem(_navSubItem);
    setNavExtraItem(_navExtraItem);
    
  }, [ _navItem, _navSubItem, _navExtraItem ])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [ navItem ])

  return (
    <AppContext.Provider value={appContext}>
      <MainBody/>
      <Footer/>
    </AppContext.Provider>
  )
}
