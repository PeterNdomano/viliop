const { app, BrowserWindow, ipcMain } = require('electron');
const { exec } = require('child_process');
const path = require('path');

const appUrl = "http://localhost:3000/";

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
  appWindow.loadURL(appUrl);
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
