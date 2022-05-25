const { app } = window.require('electron');
const path = window.require('path');
const fs = window.require('fs');
const os = window.require('os');

const resourcesDir = process.resourcesPath;
const projectsDir = path.join(resourcesDir, "projects");
export default class Project {
  constructor(options) {
    let {
      type,
      location,
      title,
    } = options;

    this.type = type;
    this.location = location;
    this.title = title;
  }

  test = () => {
    console.log(this.title);
    console.log(os.homedir());
  }

  static create(options) {
    let {
      type,
      title,
    } = options;

    return new Project({
      type, title, location:"none",
    })
  }


}
