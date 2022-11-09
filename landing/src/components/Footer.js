import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import { 
  MdEmail, 
  MdPhone, 
  MdFacebook,
} from 'react-icons/md';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export default function Footer(props) {
  const appContext = useContext(AppContext);
  return (
    <div className='Footer bg-faint-white mPad'>
      <div className='container'>
        <div className='row'>

          <div className='col-md-4' style={{ marginBottom: "20px" }}>
            <h4 className='font-light text-accent'>Links</h4>
            <h6><a style={{color: "var(--dark-color" }} href='/'>Home</a></h6>
            <h6><a style={{color: "var(--dark-color" }} href='/electroide'>Electroide</a></h6>
            <h6><a style={{color: "var(--dark-color" }} href='/viliop'>Viliop</a></h6>
            <h6><a style={{color: "var(--dark-color" }} href='/soldrax'>Soldrax</a></h6>
            <h6><a style={{color: "var(--dark-color" }} href='/quicks'>Quicks Software Series</a></h6>
            <h6><a style={{color: "var(--dark-color" }} href='https://github.com/PeterNdomano'>My Github Profile</a></h6>
            <h6><a style={{color: "var(--dark-color" }} href='https://linkedin.com/in/peterndomano'>My LinkedIn Profile</a></h6>
            <h6><a style={{color: "var(--dark-color" }} href='https://app.remotemore.com/public/M1VBTTNmQWtzYlNPU1BFRzZaVDA6OnRydWU='>My CV</a></h6>
            <h6><a style={{color: "var(--dark-color" }} href='#/hire'>Hire Me</a></h6>
          </div>

          <div className='col-md-4' style={{ marginBottom: "20px" }}>
            <h4 className='font-light text-accent'>Contacts</h4>
            <h6><MdEmail/> peter@peterndomano.dev</h6>
            <h6><MdEmail/> me@peterndomano.dev</h6>
            <h6><MdEmail/> peterndomano@gmail.com</h6>
            <h6><AiOutlineWhatsApp/> +255 767 424 063</h6>
          </div>

          <div className='col-md-12' style={{ marginBottom: "20px", marginTop:"40px" }}>
            <h6 className='text-accent'>&copy; Peter Ndomano - 2022</h6>
          </div>

        </div>
      </div>
    </div>
  )
}
