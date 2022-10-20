const { app, BrowserWindow, ipcMain, BrowserView } = require('electron');
const { exec } = require('child_process');
const path = require('path');

const isDev = process.env.DEV_MODE ? (process.env.DEV_MODE.trim() === "true") : false;

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
    width: 1080,
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


  if(isDev) {
    appWindow.loadURL("http://localhost:3000/");
  }
  else {
    appWindow.loadURL("http://localhost:3000/");
  }
  appWindow.setMenuBarVisibility(false);
  return appWindow;
}



const getToolsPath = () => {
  return path.join(process.cwd(), 'tools');
}



app.whenReady().then(() => {
  ipcMain.on('open-new-window', createAppWindow);
  ipcMain.handle('get-tools-path', getToolsPath);
  createAppWindow();
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
