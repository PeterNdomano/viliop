import React, { Component } from 'react';
import { MdPerson, MdSettings,
  MdShoppingCart, MdAssignment, MdDns, MdAnalytics, MdLogout,
  MdTableView, MdVerticalSplit, MdLibraryAdd, MdPeople, MdCalendarViewMonth
 } from 'react-icons/md';
import $ from 'jquery';
import toast from 'siiimple-toast';
import { MAIN_URL } from '../Helper';
import logo from '../logo.png';


class SideBar extends Component {

  constructor(props){
    super(props);
  }

  closeMenu(){
    $('#mainBody').removeClass('closedMainBody');
    $('#mainBody').addClass('openedMainBody');

    $('#sideBar').removeClass('openedSideBar');
    $('#sideBar').addClass('closedSideBar');

    $('#openMenuBtn').css('display', 'block');
    $('#closeMenuBtn').css('display', 'none');
  }

  render() {
    return (
      <div className="SideBar closedSideBar" id="sideBar">
        <div className="cover">
          <div style={{ width: "100%", padding: "0px", margin:"0px"}}>
            <img src={logo} style={{ width: "100%" }} alt="Kahawa Logo"/>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('my_projects');
                  this.closeMenu();
                }}
              >
                <MdLibraryAdd size={40}/>
                <h5>My Projects</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('teams');
                  this.closeMenu();
                }}
              >
                <MdPeople size={40}/>
                <h5>Teams</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('my_account');
                  this.closeMenu();
                }}
              >
                <MdAssignment size={40}/>
                <h5>My Account</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('wiki');
                  this.closeMenu();
                }}
              >
                <MdCalendarViewMonth size={40}/>
                <h5>Wiki</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('messages');
                  this.closeMenu();
                }}
              >
                <MdVerticalSplit size={40}/>
                <h5>Messages</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('notifications');
                  this.closeMenu();
                }}
              >
                <MdTableView size={40}/>
                <h5>Notifications</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('explore');
                  this.closeMenu();
                }}
              >
                <MdDns size={40}/>
                <h5>Explore</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('jobs');
                  this.closeMenu();
                }}
              >
                <MdShoppingCart size={40}/>
                <h5>Jobs</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('contact');
                  this.closeMenu();
                }}
              >
                <MdAnalytics size={40}/>
                <h5>Contact us</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('donate');
                  this.closeMenu();
                }}
              >
                <MdSettings size={40}/>
                <h5>Donate</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('logout');
                  this.closeMenu();
                }}
              >
                <MdLogout size={40}/>
                <h5>Log Out</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
