const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { ipcMain } = require('electron');

class RequestObject {
  constructor(options) {
    let {
      req,
      res,
      next
    } = options;
    this.req = req;
    this.res = res;
    this.next = next;
  }
}

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
      this.expressApp.get('', this.getter);
      this.expressApp.post('', this.poster);
      this.expressApp.listen(this.PORT, this.HOST, () => {
        //..
      })

      ipcMain.handle('get-proxied-requests', () => {
        let requests = this.proxiedRequests.map((item, i) => {
          return ({
            url: item.req.url,
          })
        })
        return requests;
      });

      resolve();
    })
  }

  forwarder = () => {

  }

  getter = (req, res) => {
    setTimeout(() => {
      req.send();
    }, 1000);
  }

  poster = (req, res) => {
    setTimeout(() => {
      req.send();
    }, 1000);
  }

  logger = (req, res, next) => {
    //this handles all reqs
    let requestObj = new RequestObject({
      req, res, next,
    })
    this.proxiedRequests.push(requestObj);
    //console.log(req);
    setTimeout(() => {
      next();
    }, 1000)
  }
}

exports.ViliopProxy = ViliopProxy;
