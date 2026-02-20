require('electron-reload')(__dirname);
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')


const createWindow = () => {
  const aWindow = new BrowserWindow({
    width: 1550,
    height: 980,
    transparent: true,
    frame: false,
    titleBarStyle: 'hiddenInset',
    movable: true,
    darkTheme: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    setClassName: "z-task"}
);

  aWindow.loadFile('index.html')
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong');
    createWindow();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})