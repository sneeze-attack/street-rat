// basic 3d6 roll, returns number
export function dice() {
  const result = (Math.floor((Math.random() * 6) + 1)) + (Math.floor((Math.random() * 6) + 1)) + (Math.floor((Math.random() * 6) + 1));
  return result;
}
