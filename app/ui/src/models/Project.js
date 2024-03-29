const { app } = window.require('electron');
const path = window.require('path');
const fs = window.require('fs');
const os = window.require('os');


export default class Project {
  constructor(configFile) {
    this.configFile = configFile;
    this.projectDir = path.dirname( configFile );
    this.reportsDir = path.join( this.projectDir, 'reports' );
    this.scansOutputDir = path.join( this.projectDir, 'scans-output' );
    this.config = JSON.parse(fs.readFileSync(configFile, {encoding:'utf8', flag:'r'}));
  }

  saveReport = async ( ID, markdown ) => {
    let reportFile = path.join( this.reportsDir, ID+".md" );
    await fs.writeFileSync( reportFile, markdown );
    return true;
  }

  checkReport = ( ID ) => {
    let reportFile = path.join( this.reportsDir, ID+".md" );
    if( fs.existsSync( reportFile ) ) {
      return true;
    } else {
      return false;
    }
  }

  getReport = async ( ID, forGeneralReport = false ) => {
    let status = this.checkReport(ID);
    if( status === true ) {
      let reportFile = path.join( this.reportsDir, ID+".md" );
      let content = fs.readFileSync(reportFile, {encoding:'utf8', flag:'r'});
      return content
    } else {
      if(forGeneralReport) {
        return "*No report was found*";
      }
      else {
        return "*Note your findings here..*";
      }
    }
  }
}
