//Arrow functions

let sayHello = name => console.log(`Hi, ${name}!`);

let getOlder = age => {
  return age + 50;
};

//Debug

const multiply = (num1, num2) => console.log(num1 * num2);

const subtractFive = num => {
  const diff = 5 - num;
  console.log(diff);
};

const printName = name => console.log(name);

//Exporting JS files with Node
module.exports = {
  sayHello: sayHello,
  getOlder: getOlder,
  multiply: multiply,
  subtractFive: subtractFive,
  printName: printName
};
