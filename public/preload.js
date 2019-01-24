const { ipcRenderer, remote, clipboard } = require('electron');

const init = () => {
  window.isElectron = true;
  window.ipcRenderer = ipcRenderer;
  window.remote = remote;
  window.clipboard = clipboard;
};

init();
