//basic 3d6 roll, returns number
export function dice() {
  let result = (Math.floor((Math.random() * 6) + 1)) + (Math.floor((Math.random() * 6) + 1)) + (Math.floor((Math.random() * 6) + 1));
  return result;
};
