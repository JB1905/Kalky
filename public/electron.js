const {
  app,
  BrowserWindow,
  Menu,
  ipcMain,
  systemPreferences,
  nativeTheme
} = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');
const windowState = require('electron-window-state');
const updater = require('update-electron-app');

let mainWindow;
let ready = false;

const createWindow = () => {
  const mainWindowState = windowState({
    defaultWidth: 500,
    defaultHeight: 400
  });

  mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    show: false,
    frame: false,
    fullscreen: false,
    maximizable: false,
    resizable: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, '/preload.js')
    }
  });

  mainWindowState.manage(mainWindow);

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  if (process.platform === 'darwin') {
    systemPreferences.subscribeNotification(
      'AppleInterfaceThemeChangedNotification',
      () => setTheme(nativeTheme.shouldUseDarkColors)
    );
  }

  mainWindow.once('ready-to-show', () => {
    setTheme(nativeTheme.shouldUseDarkColors);
    mainWindow.show();
    ready = true;
  });

  ipcMain.on('open-menu', () => {
    mainWindow.setSize(500, 400, true);
  });

  ipcMain.on('close-menu', () => {
    mainWindow.setSize(250, 400, true);
  });

  mainWindow.on('close', e => {
    if (mainWindow.forceClose) return;
    e.preventDefault();
    mainWindow.hide();
  });

  const template = [
    {
      label: 'Edit',
      submenu: [
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' }
      ]
    },
    {
      role: 'window',
      submenu: [{ role: 'minimize' }, { role: 'close' }]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'See on GitHub',
          click() {
            require('electron').shell.openExternal(
              'https://github.com/JB1905/kalky'
            );
          }
        }
      ]
    }
  ];

  if (isDev) {
    template.unshift({
      label: 'Developer',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' }
      ]
    });
  }

  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    });
  }

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

const setTheme = theme => {
  mainWindow.setVibrancy(theme ? 'ultra-dark' : 'sidebar');
};

app.on('before-quit', () => {
  mainWindow.forceClose = true;
});

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) {
    createWindow();
  } else if (mainWindow && ready) {
    mainWindow.show();
  }
});
