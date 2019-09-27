//basic 3d6 roll, returns number
export function dice() {
  let result = (Math.floor((Math.random() * 6) + 1)) + (Math.floor((Math.random() * 6) + 1)) + (Math.floor((Math.random() * 6) + 1));
  return result;
};

//easy default roll
export function easyDefault() {
  let result = (Math.floor((Math.random() * 6) + 1)) + (Math.floor((Math.random() * 6) + 1)) + (Math.floor((Math.random() * 6) + 1));
  let calc = result + 4;
  return calc;
}

//medium roll
export function mediumDefault() {
  let result = (Math.floor((Math.random() * 6) + 1)) + (Math.floor((Math.random() * 6) + 1)) + (Math.floor((Math.random() * 6) + 1));
  let calc = result + 5;
  return calc;
}

//hard roll
export function hardDefault() {
  let result = (Math.floor((Math.random() * 6) + 1)) + (Math.floor((Math.random() * 6) + 1)) + (Math.floor((Math.random() * 6) + 1));
  let calc = result + 6;
  return calc;
}
