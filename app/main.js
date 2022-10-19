const { app, BrowserWindow, ipcMain, BrowserView } = require('electron');
const { exec } = require('child_process');
const path = require('path');

const appUrl = "http://localhost:3000/";
const browserWindows = [];

const createAppWindow = () => {

  //get current window if available
  let currentWindow = BrowserWindow.getFocusedWindow();
  let x, y;

  if(currentWindow) {
    const [currentWindowX, currentWindowY] = currentWindow.getPosition();
    x = currentWindowX + 24;
    y = currentWindowY + 24;
  }
  const appWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    x,
    y,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });


  //rewriting headers to bypass cors
  function UpsertKeyValue(obj, keyToChange, value) {
    const keyToChangeLower = keyToChange.toLowerCase();
    for (const key of Object.keys(obj)) {
      if (key.toLowerCase() === keyToChangeLower) {
        // Reassign old key
        obj[key] = value;
        // Done
        return;
      }
    }
    // Insert at end instead
    obj[keyToChange] = value;
  }

  appWindow.webContents.session.webRequest.onBeforeSendHeaders(
    (details, callback) => {
      const { requestHeaders } = details;
      UpsertKeyValue(requestHeaders, 'Access-Control-Allow-Origin', ['*']);
      callback({ requestHeaders });
    },
  );

  appWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    const { responseHeaders } = details;
    UpsertKeyValue(responseHeaders, 'Access-Control-Allow-Origin', ['*']);
    UpsertKeyValue(responseHeaders, 'Access-Control-Allow-Headers', ['*']);
    callback({
      responseHeaders,
    });
  });
  //..

  appWindow.loadURL(appUrl);
  return appWindow;
}


const createBrowserWindow = () => {

  //get current window if available
  let currentWindow = BrowserWindow.getFocusedWindow();
  let x, y;

  if(currentWindow) {
    const [currentWindowX, currentWindowY] = currentWindow.getPosition();
    x = currentWindowX + 24;
    y = currentWindowY + 24;
  }
  const browserWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    x,
    y,
    webPreferences: {
      contextIsolation: true,
    }
  });


  const view = new BrowserView();
  browserWindow.setBrowserView(view);
  view.setBounds({
    x: 0,
    y: 100,
    width: 1200,
    height: 700,
  });
  view.setAutoResize({ width: true, height: true });
  browserWindow.loadFile(path.join(__dirname, "browser", "browser.html"));
  view.webContents.loadURL("https://www.google.com");
  view.webContents.openDevTools();
  return browserWindow;
}

const getToolsPath = () => {
  return path.join(process.cwd(), 'tools');
}

const getBrowserWindows = () => {
  return browserWindows;
}

const startInternetBrowser = () => {
  let browser = createBrowserWindow();
  browserWindows.push(browser);
}

app.whenReady().then(() => {
  ipcMain.on('open-new-window', createAppWindow);
  ipcMain.on('start-internet-browser', startInternetBrowser);
  ipcMain.handle('get-tools-path', getToolsPath);
  ipcMain.handle('get-browser-windows', getBrowserWindows);
  //createAppWindow();
  createBrowserWindow();
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createAppWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


//solving ssl errors
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
  event.preventDefault()
  callback(true)
})

app.on('select-client-certificate', (event, webContents, url, list, callback) => {
  event.preventDefault()
  callback(list[0])
})

//..
