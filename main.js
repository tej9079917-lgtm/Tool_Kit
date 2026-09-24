const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1280, height: 800, title: "OmniTool",
        webPreferences: { webviewTag: true, nodeIntegration: true, contextIsolation: false }
    });
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
