import { ipcRenderer, remote, clipboard } from 'electron';

const init = () => {
  (window as any).remote = remote;
  (window as any).ipcRenderer = ipcRenderer;
  (window as any).clipboard = clipboard;
};

init();
