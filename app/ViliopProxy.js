const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { ipcMain } = require('electron');

class ViliopProxy {
  constructor(options) {
    let {
      mainApp,
    } = options;
    this.mainApp = mainApp;
    this.expressApp = express();
    this.PORT = 8060;
    this.HOST = "localhost";
    this.proxiedRequests = [];
  }

  init = () => {
    return new Promise(resolve => {
      this.expressApp.use(this.logger);
      this.expressApp.listen(this.PORT, this.HOST, () => {
        //..
      })

      ipcMain.handle('get-proxied-requests', () => {
        return this.proxiedRequests 
      });

      resolve();
    })
  }

  logger = (req, res, next) => {
    //this handles all reqs
    this.proxiedRequests.push({
      req,
      res,
      next,
    });
    console.log(req);
  }
}

exports.ViliopProxy = ViliopProxy;
