const featureFlags = {
  converters: false,
  basic: false,
  scientific: false,
  programmer: false,
  date: false,
  colorConvert: false,
  ocr: false,

  mathPhysicalConstants: false,

  screenImprovements: false,

  icons: false,
  stickyMenu: false,
  dragAndDrop: false,

  windowResize: false,
  fullScreen: false,
  multiWindow: false,

  history: false,
  memory: false,
  clipboard: false,

  themes: false,
};

export const isFeatureEnabled = (name) => featureFlags[name];
export const setFeature = (name, status) => (featureFlags[name] = status);
export const getAll = () => featureFlags;
