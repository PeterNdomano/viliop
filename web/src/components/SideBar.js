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
                  this.props.navCallback('new_client');
                  this.closeMenu();
                }}
              >
                <MdLibraryAdd size={40}/>
                <h5>New Client</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('all_clients');
                  this.closeMenu();
                }}
              >
                <MdPeople size={40}/>
                <h5>All Clients</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('accounts');
                  this.closeMenu();
                }}
              >
                <MdAssignment size={40}/>
                <h5>Accounts</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('parts_shop');
                  this.closeMenu();
                }}
              >
                <MdCalendarViewMonth size={40}/>
                <h5>Parts Shop</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('debts');
                  this.closeMenu();
                }}
              >
                <MdVerticalSplit size={40}/>
                <h5>Debts</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('expenses');
                  this.closeMenu();
                }}
              >
                <MdTableView size={40}/>
                <h5>Expenses</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('ledgers');
                  this.closeMenu();
                }}
              >
                <MdDns size={40}/>
                <h5>Ledgers</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('purchases');
                  this.closeMenu();
                }}
              >
                <MdShoppingCart size={40}/>
                <h5>Purchases</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('settings');
                  this.closeMenu();
                }}
              >
                <MdAnalytics size={40}/>
                <h5>Analysis</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('settings');
                  this.closeMenu();
                }}
              >
                <MdSettings size={40}/>
                <h5>Settings</h5>
              </div>

              <div className="col-4 text-center menuItem"
                onClick={ () => {
                  this.props.navCallback('settings');
                  this.closeMenu();
                }}
              >
                <MdLogout size={40}/>
                <h5>Settings</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
