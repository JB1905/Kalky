import {
  app,
  BrowserWindow,
  ipcMain,
  // systemPreferences,
  // nativeTheme
} from 'electron';
import * as path from 'path';
import isDev from 'electron-is-dev';
import windowStateKeeper from 'electron-window-state';

import menu from './menu';
import exportData from './exportData';

// let ready = false;

const createWindow = () => {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 500,
    defaultHeight: 400,
  });

  const mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    show: true,
    frame: false,
    fullscreen: false,
    maximizable: false,
    resizable: false,
    titleBarStyle: 'hidden',
    vibrancy: 'under-window',
    // webPreferences: {
    // nodeIntegration: true
    // preload: path.join(__dirname, '/preload.js'),
    // }
  });

  mainWindowState.manage(mainWindow);

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  // if (process.platform === 'darwin') {
  //   systemPreferences.subscribeNotification(
  //     'AppleInterfaceThemeChangedNotification',
  //     () => setTheme(nativeTheme.shouldUseDarkColors)
  //   );
  // }

  mainWindow.once('ready-to-show', () => {
    // setTheme(nativeTheme.shouldUseDarkColors);
    mainWindow.show();
    // ready = true;
  });

  ipcMain.on('export-history', (e, data) => {
    exportData(data);
  });

  ipcMain.on('open-menu', () => {
    mainWindow.setSize(500, 400, true);
  });

  ipcMain.on('close-menu', () => {
    mainWindow.setSize(250, 400, true);
  });

  mainWindow.on('close', (e) => {
    // if (mainWindow.forceClose) return;
    // e.preventDefault();
    // mainWindow.hide();
  });

  // const setTheme = (theme: boolean) => {
  // mainWindow.setVibrancy('under-window');
  // };

  // app.on('before-quit', () => {
  //   mainWindow.forceClose = true;
  // });

  menu();

  // updater();
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// app.on('activate', () => {
//   if (!mainWindow) {
//     createWindow();
//   } else if (mainWindow && ready) {
//     mainWindow.show();
//   }
// });
