const { app } = window.require('electron');
const path = window.require('path');
const fs = window.require('fs');
const os = window.require('os');


export default class Project {
  constructor(configFile) {
    this.configFile = configFile;
    this.config = JSON.parse(fs.readFileSync(configFile));
  }
}
