export const toTitle = location => {
  return location.replace(/[A-Z]/g, letter => ` ${letter}`);
};

export const locationToTitle = location => {
  return location.substring(1, location.length);
};
