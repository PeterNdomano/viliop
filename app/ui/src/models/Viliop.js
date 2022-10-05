import Project from './Project';
import WebPentestGuide from './WebPentestGuide';
import MobileAppPentestGuide from './MobileAppPentestGuide';
const os = window.require('os');
const fs = window.require('fs');
const path = window.require('path');
const { PythonShell } = window.require('python-shell');


export default class Viliop {

  init = () => {
    //setting tools folder
    this.toolsFolder = "C:/xampp/htdocs/github_projects/viliop-tools";
    //setting python path
    this.pythonPath = "C:/Users/Ndomano/AppData/Local/Programs/Python/Python310/python.exe";

    //this initializes Viliop main processes and project
    this.currentProject = null;
    return new Promise( async (fulfilled, rejected) => {
      try {
        await this.createMainFolder().then(async (mainFolder) => {
          this.mainFolder = mainFolder;
          await this.createProjectsFolder().then( async (projectsFolder) => {
            this.projectsFolder = projectsFolder;
            await this.createConfigFolder().then( async (configFolder) => {
              this.configFolder = configFolder;
              fulfilled(true); //can add more inits but call this after all inits are done
            })
          });
        });
      }
      catch (err) {
        rejected(err);
      }
    })

  }

  createMainFolder = () => {
    return new Promise( async (fulfilled, rejected) => {
      let mainFolder = path.join(os.homedir(), 'Viliop');
      if(fs.existsSync(mainFolder)) {
        //return folder name
        fulfilled(mainFolder);
      }
      else {
        //create main folder
        try {
          await fs.mkdirSync(mainFolder);
          fulfilled(mainFolder);
        }
        catch (err) {
          rejected(err)
          // TODO: Add to error log
        }
      }
    })
  }

  createProjectsFolder = () => {
    return new Promise( async (fulfilled, rejected) => {
      let projectsFolder = path.join(this.mainFolder, 'projects');
      if(fs.existsSync(projectsFolder)) {
        //return folder name
        fulfilled(projectsFolder);
      }
      else {
        //create folder
        try {
          await fs.mkdirSync(projectsFolder);
          fulfilled(projectsFolder);
        }
        catch (err) {
          rejected(err)
          // TODO: Add to error log
        }
      }
    })
  }

  createConfigFolder = () => {
    return new Promise( async (fulfilled, rejected) => {
      let configFolder = path.join(this.mainFolder, 'config');
      if(fs.existsSync(configFolder)) {
        //return folder name
        fulfilled(configFolder);
      }
      else {
        //create folder
        try {
          await fs.mkdirSync(configFolder);
          fulfilled(configFolder);
        }
        catch (err) {
          rejected(err)
          // TODO: Add to error log
        }
      }
    })
  }

  createNewProject = async (options) => {
    try {
      let {
        type,
        targetUrl,
        location,
        title,
      } = options;
      //create project folder
      await fs.mkdirSync(location);

      //create sub folders
      await fs.mkdirSync( path.join( location, 'reports' ) ); //reports dir


      //create project config.json
      let config = {
        type,
        title,
        targetUrl,
        viliopVersion:"0.0.1",
      }
      let configFile = path.join(location, 'config.json');

      //write config file
      await fs.writeFileSync(configFile, JSON.stringify( config, null, "\t" ));

      //create project instance
      let project = new Project(configFile);
      this.currentProject = project;

      //create specific guide for this project
      let guide = (type === "webPentest") ? new WebPentestGuide(project) : new MobileAppPentestGuide(project);
      this.guide = guide;

      //finish off
      return true;
    }
    catch ( err ) {
      return err.message;
    }
  }

  fwsScan = (url) => {
    return new Promise( async (fulfilled, rejected) => {
      try {
        let toolPath = path.join(this.toolsFolder, "FWS-Scanner/main.py");
        let scanOpts = {
          mode: 'text',
          pythonPath: this.pythonPath,
          pythonOptions: ['-u'], // get print results in real-time
          //scriptPath: toolPath,
          args: ['-u http://'+url],
        };
        await PythonShell.run(toolPath, scanOpts, (error, result) => {
          if(error){
            rejected(error);
          }
          console.log(result);
          fulfilled(result);
        })
      }
      catch (e) {
        rejected(e)
      }
    })
  }
}
