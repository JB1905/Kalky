export const titleString = location =>
  location
    .substring(1, location.length)
    .replace(/[A-Z]/g, letter => ` ${letter}`);
