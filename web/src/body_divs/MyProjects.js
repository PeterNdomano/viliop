import react, { Component } from 'react';
import $ from 'jquery';
import { MAIN_URL, tellUser } from '../Helper';
import { MdAdd, MdSettings, MdShare, MdMoreVert } from 'react-icons/md';


class MyProjects extends Component{
  constructor(props){
    super(props)
    this.state = {
      subNavTo: 'main',

    }
  }

  subNavCallback(navTo){
    this.setState({
      subNavTo: navTo,
    })
  }

  renderAddProject(){
    return (
      <div className="MyProjects">
        <h3 style={{ marginTop:"20px", marginBottom:"10px" }}>Add Project</h3>

        <div className="row">
          <div className="col-12 inDivNavBar">
            <h6>
              <span onClick={() => { this.subNavCallback('main') }} className="item parent">My Projects</span>
              <span className="ind">&nbsp;&gt;&nbsp;</span>
              <span className="item">Add Project</span>
            </h6>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6" style={{ marginTop: "20px"}}>
            <h5 style={{ color:"var(--faintDark)", width: "100%", borderBottom: "1px solid var(--primaryColor)" }}>Project Details</h5>
            <div className="form-group">
              <label>Title</label>
              <input className="form-control"/>
            </div>
            <div className="form-group">
              <label>Privacy</label>
              <select className="form-control">
                <option value="Private">Private - It won't be visible in newsfeed & explore</option>
                <option value="Public">Public - Will be visible in newsfeed & explore</option>
              </select>
            </div>
            <div className="form-group">
              <label>Category</label>
              <select className="form-control">
                <option value="Website">Website</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Desktop App">Desktop App</option>
                <option value="Multiplatform Software">Multiplatform Software</option>
                <option value="Blockchain App">Blockchain App</option>
                <option value="AI Model">AI Model</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="form-group">
              <label>Specify Category</label>
              <input className="form-control"/>
            </div>
            <div className="form-group">
              <label>Short Description (200 characters)</label>
              <textarea className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label>Project Start Date</label>
              <input className="form-control"/>
            </div>
          </div>

          <div className="col-sm-12 col-md-6" style={{ marginTop: "20px"}}>
            <h5 style={{ color:"var(--faintDark)", width: "100%", borderBottom: "1px solid var(--primaryColor)" }}>Presentation files (Only Images or PDFs)</h5>
            <div className="form-group">
              <label>File #1</label>
              <input className="form-control" type="file"/>
            </div>
            <div className="form-group">
              <label>File #2</label>
              <input className="form-control" type="file"/>
            </div>
            <div className="form-group">
              <label>File #3</label>
              <input className="form-control" type="file"/>
            </div>
          </div>

          <div className="col-sm-12 col-md-12" style={{ marginTop: "20px"}}>
            <h5 style={{ color:"var(--faintDark)", width: "100%", borderBottom: "1px solid var(--primaryColor)" }}>Tasks</h5>
            <div className="form-group">
              <label>File #1</label>
              <input className="form-control" type="file"/>
            </div>
            <div className="form-group">
              <label>File #2</label>
              <input className="form-control" type="file"/>
            </div>
            <div className="form-group">
              <label>File #3</label>
              <input className="form-control" type="file"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderMain(){
    return (
      <div className="MyProjects">

        <h3 style={{ marginTop:"20px", marginBottom:"10px" }}>My Projects</h3>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-6" style={{ marginTop:"20px" }}>
            <div className="d-flex flex-row" style={{ borderBottom: "1px solid var(--faintDark)" }}>
              <div className="align-self-center p-1">
                <h5>Projects <span className="badge" style={{ background: 'var(--faintDark)', color: 'var(--accentColor)'}}>12</span></h5>
              </div>
              <div className="align-self-center flex-grow-1 text-right">
                <button className="btn btn-sm">View All</button>
                &nbsp;
                <button onClick={() => { this.subNavCallback('add_project') }} className="btn btn-sm"><MdAdd size={15}/></button>
              </div>
            </div>

            <div className="projectsSubList">
              <div className="item">
                <h6 className="title">Project Name</h6>
                <h6 className="category"><i>Category</i></h6>

                <div className="menuBtns text-right">
                  <button className="btn btn-sm"> <MdSettings size={18}/>Manage</button>
                  &nbsp;
                  <button className="btn btn-sm"> <MdShare size={18}/> Share</button>
                </div>
              </div>

              <div className="item">
                <h6 className="title">Project Name</h6>
                <h6 className="category"><i>Category</i></h6>

                <div className="menuBtns text-right">
                  <button className="btn btn-sm"> <MdSettings size={18}/>Manage</button>
                  &nbsp;
                  <button className="btn btn-sm"> <MdShare size={18}/> Share</button>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-6 col-sm-12 col-lg-6" style={{ marginTop:"20px" }}>
            <div className="d-flex flex-row" style={{ borderBottom: "1px solid var(--faintDark)" }}>
              <div className="align-self-center p-1">
                <h5>Today's Tasks <span className="badge" style={{ background: 'var(--faintDark)', color: 'var(--accentColor)'}}>12</span></h5>
              </div>
              <div className="align-self-center flex-grow-1 text-right">
                <button className="btn btn-sm">View All</button>
                &nbsp;
                <button className="btn btn-sm"><MdAdd size={15}/></button>
              </div>
            </div>

            <div className="projectsSubList">
              <div className="item">
                <h6 className="title">Task Name</h6>
                <h6 className="category"><i>Task status</i></h6>

                <div className="menuBtns text-right">
                  <button className="btn btn-sm"> <MdMoreVert size={18}/>More</button>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-12 col-sm-12 col-lg-12" style={{ marginTop:"20px" }}>
            <div className="d-flex flex-row" style={{ borderBottom: "1px solid var(--faintDark)" }}>
              <div className="align-self-center p-1">
                <h5>Calender</h5>
              </div>
              <div className="align-self-center flex-grow-1 text-right">
                <button className="btn btn-sm"><MdSettings size={18}/>Manage</button>
                &nbsp;
                <button className="btn btn-sm"><MdAdd size={18}/>Add Event</button>
              </div>
            </div>

            <div className="projectsSubList">
              <div className="item">
                <h6 className="title">Task Name</h6>
                <h6 className="category"><i>Task status</i></h6>

                <div className="menuBtns text-right">
                  <button className="btn btn-sm"> <MdMoreVert size={18}/>More</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }

  render(){
    switch(this.state.subNavTo){
      case 'main':
        return (this.renderMain());
        break;
      case 'add_project':
        return (this.renderAddProject());
        break;
      default:
        return (<div></div>);
        break;
    }
    return this.renderAddProject();
  }
}

export default MyProjects;
