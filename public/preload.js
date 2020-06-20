const { ipcRenderer, remote, clipboard } = require('electron');

const init = () => {
  window.remote = remote;
  window.ipcRenderer = ipcRenderer;
  window.clipboard = clipboard;
};

init();
