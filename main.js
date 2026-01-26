require('electron-reload')(__dirname);
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')


const createWindow = () => {
  const aWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  aWindow.loadFile('index.html')
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong');
    createWindow();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})