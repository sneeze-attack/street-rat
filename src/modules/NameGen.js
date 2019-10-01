export function maleFirstName() {
  let firstNames = [
    'Alex',
    'Allen',
    'Ben',
    'Bill',
    'Charles',
    'Dale',
    'Dan',
    'Doug',
    'Earl',
    'Ethan',
    'Fred',
    'George',
    'Hank',
    'Henry',
    'Homer',
    'Irvin',
    'Jack',
    'James',
    'Keith',
    'Leo',
    'Lucas',
    'Malcolm',
    'Michael',
    'Mark',
    'Max',
    'Ned',
    'Noah',
    'Newton',
    'Oliver',
    'Oswald',
    'Peter',
    'Quincy',
    'Ralph',
    'Samson',
    'Tom',
    'Vince',
    'Walter',
    'William',
    'Zach'
  ];

  let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  return firstName;
}

export function femaleFirstName() {
  let firstNames = [
    'Allison',
    'Amy',
    'Angela',
    'Beth',
    'Beverly',
    'Charlotte',
    'Cynthia',
    'Dana',
    'Ellie',
    'Fiona',
    'Hannah',
    'Helen',
    'Irene',
    'Kim',
    'Lucy',
    'Marge',
    'Mary',
    'Nancy',
    'Olivia',
    'Patricia',
    'Peggy',
    'Rachel',
    'Rita',
    'Shannon',
    'Susan',
    'Theresa',
    'Victoria'
  ];

  let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  return firstName;
}
