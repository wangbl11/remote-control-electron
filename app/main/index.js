const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
let min;
app.on('ready', () => {
       min = new BrowserWindow(
              {
                     width: 600,
                     height: 300,
                     webPreferences: {
                            nodeIntegration: true
                     }
              }
       )
       if (isDev) {
              min.loadURL('http://localhost:3000')
       } else {
              min.loadFile(path.resolve(__dirname, '../renderer/pages/main/index.html'))
       }
})