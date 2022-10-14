import Project from './Project';
import WebPentestGuide from './WebPentestGuide';
import MobileAppPentestGuide from './MobileAppPentestGuide';
import { setupConsole, tellUser } from '../Helper';
const os = window.require('os');
const fs = window.require('fs');
const path = window.require('path');
const { PythonShell } = window.require('python-shell');
const { ipcRenderer } = window.require('electron');



export default class Viliop {


  init = () => {
    //this initializes viliop and checks all configs
    return new Promise( async (resolve) => {
      this.currentProject = null;
      if(!console.vlog) {
        setupConsole();
      }
      console.log('Viliop is initializing, please wait....');
      try {
        await this.createMainFolder().then(async (mainFolder) => {
          if(mainFolder) {
            this.mainFolder = mainFolder;
            await this.createProjectsFolder().then( async (projectsFolder) => {
              if(projectsFolder) {
                this.projectsFolder = projectsFolder;
                await this.createConfigFolder().then( async (configFolder) => {
                  if(configFolder) {
                    this.configFolder = configFolder;
                    //check health of tools folder
                    await this.checkToolsFolder().then(async status => {
                      if(status === 1) {
                        //check and test config settings
                        await this.checkMainConfigs().then(  async (status) => {
                          //0 means error occured
                          //1 means everything is okay
                          //2 means some config options are missing so do manual config, (especially for 1st time use)
                          if(status === 1) {

                          }
                          resolve(status);
                        })
                      }
                      else {
                        resolve(0);
                        console.error("Viliop Tools folder was tempered or not available, please check our FAQ on how to solve this issue");
                      }
                    })
                  }
                  else {
                    resolve(0);
                    console.error("Viliop encountered file/folder related problems when handling Config Folder. Check for file permissions inside your Home directory");
                  }
                })
              }
              else {
                resolve(0);
                console.error("Viliop encountered file/folder related problems when handling Projects Folder. Check for file permissions inside your Home directory");
              }
            });
          }
          else {
            resolve(0);
            console.error("Viliop encountered file/folder related problems when handling main Folder. Check for file permissions inside your Home directory");
          }
        });
      }
      catch (err) {
        resolve(0);
        console.log(err.msg);
      }
    })
  }

  checkToolsFolder = () => {
    //this checks health of tools folder
    return new Promise(async resolve => {
      //check folder availability
      let toolsFolder = await ipcRenderer.invoke('get-tools-path');
      this.toolsFolder = toolsFolder; //setting global toolsFolder
      let toolsIndexPath = path.join(toolsFolder, 'tools.json');
      if(fs.existsSync(toolsIndexPath)) {
        //generate installed.json
        let installedTools = [];
        let allTools = JSON.parse(fs.readFileSync(toolsIndexPath,  {encoding:'utf8', flag:'r'}));
        allTools.forEach((item, i) => {
          let testPath = path.join(toolsFolder, item.name);
          if(fs.existsSync(testPath)) {
            let tool = item;
            let toolInfo = JSON.parse(fs.readFileSync(path.join(testPath, 'info.json'), {encoding:'utf8', flag:'r'}));
            tool.version = toolInfo.version;
            installedTools.push(tool);
          }
        });

        //generate installed.json
        fs.writeFileSync(path.join(toolsFolder, 'installed.json'), JSON.stringify(installedTools, null, "\t"));
        resolve(1);

      }
      else {
        tellUser('Startup error occured, could not find tools folder. Check log for more info');
        resolve(0);
      }
    })
  }

  handleConfig = (config) => {
    //saves configurations assuming they're already checked and valid
    return new Promise(async resolve => {
      let userConfigFile = path.join(this.configFolder, 'user.json');
      let viliopConfigFile = path.join(this.configFolder, 'viliop.json');

      fs.writeFileSync(userConfigFile, JSON.stringify( config.user, null, "\t" ));
      fs.writeFileSync(viliopConfigFile, JSON.stringify( config.viliop, null, "\t" ));

      resolve(1);
    })
  }

  updateToolsIndex = () => {
    //this updates tools index
    // TODO: update tools index
    return new Promise(resolve => {
      resolve(0);
    })
  }

  isToolInstalled = (toolName) => {
    return new Promise(async resolve => {
      let installedTools = await this.getInstalledTools();
      let response = {
        status: 0,
        installedVersion: null,
      };

      installedTools.forEach((item, i) => {
        if(item.name === toolName) {
          response.status = 1;
          response.installedVersion = item.version;
        }
      });

      resolve(response);

    })
  }

  getAllTools = () => {
    return new Promise(async resolve => {
      let toolsIndexPath = path.join(this.toolsFolder, 'tools.json');
      let allTools = JSON.parse(fs.readFileSync(toolsIndexPath,  {encoding:'utf8', flag:'r'}));
      resolve(allTools);
    })
  }

  getInstalledTools = () => {
    return new Promise(async resolve => {
      let installedToolsIndexPath = path.join(this.toolsFolder, 'installed.json');
      let installedTools = JSON.parse(fs.readFileSync(installedToolsIndexPath,  {encoding:'utf8', flag:'r'}));
      resolve(installedTools);
    })
  }

  pythonTest = (path) => {
    return new Promise(async resolve => {
      // TODO: handle python testing here
      resolve(1);
    })
  }

  getConfigDefaults = async () => {
    return new Promise(async resolve => {
      let userConfigFile = path.join(this.configFolder, 'user.json');
      let viliopConfigFile = path.join(this.configFolder, 'viliop.json');
      let user = {
        name: "", //default
        email: "", //default
      }

      //setting default paths according to os
      let loc1 = "" //for pythonPath
      let loc2 = await ipcRenderer.invoke('get-tools-path'); //for toolsFolder

      if(process.platform === "win32") {
        //its windows
        loc1 = 'AppData/Local/Programs/Python/Python310/python.exe';

      }
      else if(process.platform === "linux") {
        //its linux
        // TODO: handle for linux and mac
      }
      else if(process.platform === "darwin") {
        //its mac
        // TODO: handle for linux and mac
      }

      let viliop = {
        pythonPath: path.join(os.homedir(), loc1), //default
        toolsFolder: loc2, //default viliop tools folder
        viliopVersion: "0.0.1", //default
      }

      if(fs.existsSync(userConfigFile)) {
        //fill the details
        let content = JSON.parse(fs.readFileSync(userConfigFile, {encoding:'utf8', flag:'r'}));
        user.email = (content.email) ? content.email : user.email;
        user.name = (content.name) ? content.name : user.name;
      }

      if(fs.existsSync(viliopConfigFile)) {
        //fill the details
        let content = JSON.parse(fs.readFileSync(viliopConfigFile, {encoding:'utf8', flag:'r'}));
        viliop.pythonPath = (content.pythonPath) ? content.pythonPath : viliop.pythonPath;
        viliop.toolsFolder = (content.toolsFolder) ? content.toolsFolder : viliop.toolsFolder;
      }

      resolve({
        user,
        viliop,
      })

    })
  }


  checkMainConfigs = () => {
    //this checks and tests all config and environmental setups
    return new Promise( async resolve => {
      let userConfigFile = path.join(this.configFolder, 'user.json');
      let viliopConfigFile = path.join(this.configFolder, 'viliop.json');

      if(fs.existsSync(userConfigFile)) {
        if(fs.existsSync(viliopConfigFile)) {
          //check if config file content are valid
          let userConfig = JSON.parse(fs.readFileSync(userConfigFile, {encoding:'utf8', flag:'r'}));
          let viliopConfig = JSON.parse(fs.readFileSync(viliopConfigFile, {encoding:'utf8', flag:'r'}));

          if( userConfig.email && userConfig.name ) {
            if( viliopConfig.toolsFolder && viliopConfig.viliopVersion && viliopConfig.pythonPath ) {
              await this.pythonTest(viliopConfig.pythonPath).then(async status => {
                if(status === 1) {
                  //all is well
                  this.viliopVersion = viliopConfig.viliopVersion;
                  this.pythonPath = viliopConfig.pythonPath;

                  this.userEmail = userConfig.email;
                  this.userName = userConfig.name;
                  resolve(1);
                }
                else {
                  console.error('There is a problem with your Python 3 path, please specify the right path for Python 3 executable (python.exe)');
                  resolve(2);
                }
              });
            }
            else {
              console.log('Some configuration information is missing...');
              resolve(2);
            }
          }
          else {
            console.log('Some configuration information is missing...');
            resolve(2);
          }
        }
        else {
          console.log('Configure your Viliop Integrated Pentesting Environment');
          resolve(2);
        }
      }
      else {
        console.log('Configure your Viliop Integrated Pentesting Environment');
        resolve(2);
      }
    })
  }

  createMainFolder = () => {
    return new Promise( async (resolve) => {
      let mainFolder = path.join(os.homedir(), 'Viliop');
      if(fs.existsSync(mainFolder)) {
        //return folder name
        resolve(mainFolder);
      }
      else {
        //create main folder
        try {
          await fs.mkdirSync(mainFolder);
          resolve(mainFolder);
        }
        catch (err) {
          resolve(false)
          console.log(err.message);
        }
      }
    })
  }

  createProjectsFolder = () => {
    return new Promise( async (resolve) => {
      let projectsFolder = path.join(this.mainFolder, 'projects');
      if(fs.existsSync(projectsFolder)) {
        //return folder name
        resolve(projectsFolder);
      }
      else {
        //create folder
        try {
          await fs.mkdirSync(projectsFolder);
          resolve(projectsFolder);
        }
        catch (err) {
          resolve(false);
          console.log(err.message);
        }
      }
    })
  }

  createConfigFolder = () => {
    return new Promise( async (resolve) => {
      let configFolder = path.join(this.mainFolder, 'config');
      if(fs.existsSync(configFolder)) {
        //return folder name
        resolve(configFolder);
      }
      else {
        //create folder
        try {
          await fs.mkdirSync(configFolder);
          resolve(configFolder);
        }
        catch (err) {
          resolve(false)
          console.log(err.msg);
        }
      }
    })
  }

  createNewProject = async (options) => {
    return new Promise(resolve => {
      try {
        let {
          type,
          targetUrl,
          location,
          title,
          pentesterEmail,
          pentesterName,
        } = options;
        //create project folder
        if(!fs.existsSync(location)) {
          fs.mkdirSync(location);
        }


        //create sub folders
        if(!fs.existsSync(path.join( location, 'reports' ))) {
            fs.mkdirSync( path.join( location, 'reports' ) ); //reports dir
        }

        if(!fs.existsSync(path.join( location, 'scans-output' ))) {
          fs.mkdirSync( path.join( location, 'scans-output' ) ); //scan-output dir
        }


        //create project config.json
        let config = {
          type,
          title,
          targetUrl,
          viliopVersion: this.viliopVersion,
          pentesterEmail,
          pentesterName,
        }
        let configFile = path.join(location, 'config.json');

        //write config file
        fs.writeFileSync(configFile, JSON.stringify( config, null, "\t" ));

        //create project instance
        let project = new Project(configFile);


        //create specific guide for this project
        let guide = (type === "webPentest") ? new WebPentestGuide(project) : new MobileAppPentestGuide(project);
        this.guide = guide;

        //assign current project
        this.currentProject = project;

        //finish off
        resolve(true);
      }
      catch ( err ) {
        resolve(err.message);
      }
    })
  }

  checkProjectConfig = (content) => {
    //checks if necessary fields are defined
    return new Promise(resolve => {
      content = JSON.parse(content);
      if(
        content.viliopVersion &&
        content.type &&
        content.title &&
        content.targetUrl &&
        content.pentesterName &&
        content.pentesterEmail
      ){
        resolve(true);
      }
      else {
        resolve("Invalid/Corrupt configuration file")
      }
    });
  }

  loadProject = (options) => {
    return new Promise( async resolve => {
      let {
        configPath,
      } = options;
      let pathObj = path.parse(configPath);
      let configFile = path.join(pathObj.dir, "config.json");

      if(fs.existsSync(configFile)) {
        try {
          let configContent = fs.readFileSync(configFile, {encoding:'utf8', flag:'r'});
          await this.checkProjectConfig(configContent).then(status => {
            if(status === true) {
              //create project instance
              let project = new Project(configFile);
              this.currentProject = project;

              //create specific guide for this project
              let guide = (project.config.type === "webPentest") ? new WebPentestGuide(project) : new MobileAppPentestGuide(project);
              this.guide = guide;

              //finish off
              resolve(true);
            }
            else {
              resolve(status);
            }
          })
        } catch (e) {
          resolve(e.message);
        }
      }
      else {
        resolve("Could not find project configuration file");
      }
    })
  }

  checkScansOutputFolder = () => {
    return new Promise( async resolve => {
      if(fs.existsSync(this.currentProject.scansOutputDir)) {
        resolve(true);
      }
      else {
        //create scans folder then resolve
        fs.mkdirSync( this.currentProject.scansOutputDir );
        resolve(true);
      }
    })
  }

  fwsScan = (url) => {
    return new Promise( async (resolve) => {
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
            console.error(error)
            resolve(false);
          }
          resolve(result);
        })
      }
      catch (e) {
        console.error(e.message);
        resolve(false);
      }
    })
  }

  metaScrap = (url) => {
    return new Promise( async (resolve) => {
      await this.checkScansOutputFolder().then( async (status) => {
        if(status) {
          let outputDir = path.join(this.currentProject.scansOutputDir, 'meta-scrapper');
          if(!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir);
          }
          try {
            let toolPath = path.join(this.toolsFolder, "Meta-Scrapper/main.py");
            let scanOpts = {
              mode: 'text',
              pythonPath: this.pythonPath,
              pythonOptions: ['-u'], // get print results in real-time
              //scriptPath: toolPath,
              args: ['-u http://'+url, '-d '+outputDir],
            };
            await PythonShell.run(toolPath, scanOpts, (error, result) => {
              if(error){
                console.error(error)
                resolve(false);
              }
              resolve(result);
            })
          }
          catch (e) {
            console.error(e.message);
            resolve(false);
          }
        }
        else {
          console.error("Scan could not begin due to file system error, make you have permission to read and write the project's folder");
          resolve(false);
        }
      })
    })
  }
}
