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

// Async transforma la función en una función asíncrona que retorna una promesa
const getInfoEmployee =  async(id) => {
    try {
        const employee = await getEmployee(id);
        const wage = await getWage(id)
        return `${employee}'s wage is ${wage}`
    } catch (error) {
        throw error
    }
}

const id = 4;

getInfoEmployee(id)
    .then( msg => console.log(msg) )
    .catch( err => console.log(err) )

