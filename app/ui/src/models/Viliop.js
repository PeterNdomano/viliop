const os = window.require('os');
const fs = window.require('fs');
const path = window.require('path');

export default class Viliop {

  init = () => {
    //this initializes Viliop main processes and project
    this.project = null;
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

  createNewProject = async () => {
    //this create new project
  }
}
