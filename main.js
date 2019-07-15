const electron = require('electron');
const path = require('path');
const url = require('url');

const {app,BrowserWindow,ipcMain} = electron;

let mainWindow;

//Listen for app to be ready
app.on('ready', ()=>{
    //create new window
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    //load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    //quit app when window closed
    mainWindow.on('closed', function () {
        app.quit();
    })
})
