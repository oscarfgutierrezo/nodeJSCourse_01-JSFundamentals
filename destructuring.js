// ----------> Desestructuración de Objetos <----------

const person01 = {
  name: 'Fernando',
  lastname: 'Gutiérrez',
  age: 30,
}

// En el proceso de desestructuración se pueden asignar valores por defecto a las variables
const { name, lastname, age = 18 } = person01

// La desestructuración se puede realizar directamente en los argumentos de una función
const printPerson = ({ name, lastname, age }) => {
  console.log(name, lastname, age);
}
printPerson(person01)


// ----------> Desestructuración de Arreglos <----------

// En la desestructuración de arreglos se pueden asignar nombres a cada una de las variables
const employees = [
  {
    nombre: 'Oscar',
    edad: 30
  },
  {
    nombre: 'Fernando',
    edad: 32
  },
  {
    nombre: 'Karen',
    edad: 28
  },
];

const [ employee_01, employee_02, employee_03 ] = employees;
console.log(employee_02);




