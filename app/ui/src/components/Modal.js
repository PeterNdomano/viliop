import React, { Component, Fragment } from 'react';
import { MdClose } from 'react-icons/md';
import $ from 'jquery';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }

    this.title = "";
    this.view = "";
  }

  componentDidMount() {
    this.handleDisplay(this.props);
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.handleDisplay(props);
  }

  handleDisplay = (props) => {


    if(props.show === true){
      this.title = props.title;
      this.view = props.view;
      this.setState({
        show: true,
      }, () => {
        $('#modal').modal().show();
        $('#modal-body').scrollTop(0);
      });
    }
    else{
      this.view = <></>;
      this.setState({
        show: false,
      })
    }
  }

  render() {
    if(this.state.show === true){
      return (
        <div>
          {/* modal */}
          <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content z-depth-1-half">
                <div className="modal-header">
                  <h5 style={{ color:"var(--accentColor)" }} className="modal-title font-bold" id="exampleModalLongTitle">{this.title}</h5>
                  <button id="modalCloser" type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" style={{ color: "var(--darkColor)"}}><MdClose size={24} color="var(--secondaryColor)"/></span>
                  </button>
                </div>
                <div className="modal-body">
                  {this.view}
                </div>
              </div>
            </div>
          </div>
          {/* modal end*/}
        </div>
      )
    }
    else{
      return <Fragment/>
    }
  }
}
