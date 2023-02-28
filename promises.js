const employees = [
    {
        id: 1,
        name: 'Andrea'
    },
    {
        id: 2,
        name: 'Luisa'
    },
    {
        id: 3,
        name: 'Carlos'
    }
];

const wages = [
    {
        id: 1,
        wage: 1000
    },
    {
        id: 2,
        wage: 1500
    }
];

const getEmployee = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        const employee = employees.find( employee => employee.id === id)?.name;
        (employee) 
            ? resolve(employee)
            : reject( `There isn't employee with id ${id}` )
    })
};

const getWage = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        const wage = wages.find( wage => wage.id === id )?.wage;
        ( wage )
            ? resolve(wage)
            : reject( `There isn't wage for employee with id ${id}` )
    })
};

const id = 4;
let name;

getEmployee(id)
    .then( employee => {
        name = employee
        return getWage(id)
    })
    .then( wage => console.log(`${name}'s wage is ${wage}`) )
    .catch( err => console.log(err) )