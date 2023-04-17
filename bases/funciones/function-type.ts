const addNumber = (a: number, b: number) => a + b;
const greet = (name: string) => `Hola ${name}`;
const saveTheWorld = () => `El mundo está salvado!`;

let myFunction: Function;

let myFunctionUno: (y: number, z: number) => number
let myFunctionDos: (y: string) => string
let myFunctionTres: () => string

//* myFunction = 10;
//* console.log(myFunction);

myFunctionUno = addNumber
console.log(myFunctionUno(1, 2));

myFunctionDos = greet
console.log(myFunctionDos('usuario'));

myFunctionTres = saveTheWorld
console.log(myFunctionTres());


