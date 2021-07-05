import React, { Component } from 'react';
import { MdLogin } from 'react-icons/md';
import $ from 'jquery';
import toast from 'siiimple-toast';
import { MAIN_URL } from '../Helper';


class MainBody extends Component {

  constructor(props){
    super(props);
  }

  renderNewClient(){
    return (
      <div className="MainBody openedMainBody" id="mainBody">
        <div className="container">
          <h4>New Client</h4>
        </div>
      </div>
    );
  }

  renderAllClients(){
    return (
      <div className="MainBody openedMainBody" id="mainBody">
        <div className="container">
          <h4>All clients</h4>
        </div>
      </div>
    );
  }

  renderAccounts(){
    return (
      <div className="MainBody openedMainBody" id="mainBody">
        <div className="container">
          <h4>Accounts</h4>
        </div>
      </div>
    );
  }

  renderPartsShop(){
    return (
      <div className="MainBody openedMainBody" id="mainBody">
        <div className="container">
          <h4>Parts Shop</h4>
        </div>
      </div>
    );
  }

  renderDebts(){
    return (
      <div className="MainBody openedMainBody" id="mainBody">
        <div className="container">
          <h4>Debts</h4>
        </div>
      </div>
    );
  }

  renderExpenses(){
    return (
      <div className="MainBody openedMainBody" id="mainBody">
        <div className="container">
          <h4>Expenses</h4>
        </div>
      </div>
    );
  }

  renderLedgers(){
    return (
      <div className="MainBody openedMainBody" id="mainBody">
        <div className="container">
          <h4>Ledgers</h4>
        </div>
      </div>
    );
  }

  renderPurchases(){
    return (
      <div className="MainBody openedMainBody" id="mainBody">
        <div className="container">
          <h4>Purchases</h4>
        </div>
      </div>
    );
  }

  renderSettings(){
    return (
      <div className="MainBody openedMainBody" id="mainBody">
        <div className="container">
          <h4>Settings</h4>
        </div>
      </div>
    );
  }

  render() {
    switch (this.props.navTo) {
      case 'new_client':
        return this.renderNewClient()
        break;
      case 'all_clients':
        return this.renderAllClients()
        break;
      case 'accounts':
        return this.renderAccounts()
        break;
      case 'parts_shop':
        return this.renderPartsShop()
        break;
      case 'debts':
        return this.renderDebts()
        break;

      case 'expenses':
        return this.renderExpenses()
        break;

      case 'ledgers':
        return this.renderLedgers()
        break;

      case 'purchases':
        return this.renderPurchases()
        break;

      case 'settings':
        return this.renderSettings()
        break;
      default:
        return (<div></div>);
        break;
    }
  }
}

export default MainBody;
