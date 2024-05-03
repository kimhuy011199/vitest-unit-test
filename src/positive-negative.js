export const isLuckyNumber = (num) => {
  if (typeof num !== 'number') {
    return false;
  }

  return num >= 1 && num <= 8;
};
