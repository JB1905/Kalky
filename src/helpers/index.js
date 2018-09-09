export const toTitle = location =>
  location.replace(/[A-Z]/g, letter => ` ${letter}`);

export const locationToTitle = location =>
  location.substring(1, location.length);
