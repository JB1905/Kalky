const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const windowState = require('electron-window-state');
const updater = require('update-electron-app');

let mainWindow;
let ready = false;

const createWindow = () => {
  const mainWindowState = windowState({
    defaultWidth: 400,
    defaultHeight: 500
  });

  mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    show: false,
    fullscreen: false,
    vibrancy: 'medium-light',
    titleBarStyle: 'hidden',
    resizable: false
  });

  mainWindowState.manage(mainWindow);

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    ready = true;
  });

  ipcMain.on('menu-toggle', (e, arg) => {
    if (mainWindowState.width === 250) mainWindow.setSize(500, 400, true);
    else mainWindow.setSize(250, 400, true);
  });

  mainWindow.on('close', e => {
    if (mainWindow.forceClose) return;
    e.preventDefault();
    mainWindow.hide();
  });

  const template = [
    {
      label: 'View',
      submenu: [
        {
          label: 'Appearance',
          submenu: [
            {
              label: 'Light',
              type: 'radio',
              click() {
                mainWindow.setVibrancy('medium-light');
                mainWindow.webContents.send('light');
              }
            },
            {
              label: 'Dark',
              type: 'radio',
              click() {
                mainWindow.setVibrancy('ultra-dark');
                mainWindow.webContents.send('dark');
              }
            }
          ]
        }
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
              'https://github.com/JB1905/Kalky'
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

app.on('before-quit', () => (mainWindow.forceClose = true));

app.on('ready', () => createWindow());

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
  else if (mainWindow !== null && ready) mainWindow.show();
});
