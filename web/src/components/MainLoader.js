import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class MainLoader extends Component {

  constructor(props){
    super(props);

  }

  loader(){
    return (
      <div className="MainLoader">
        <Loader
          style={{
            position:'absolute',
            top:"50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          type="Bars"
          color="var(--primaryColor)"
          width={40}
        />
      </div>
    );
  }
  render() {
    if(this.props.show){
      return this.loader();
    }
    else{
      return (<div></div>);
    }
  }
}

export default MainLoader;
