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

id = 4;

const getEmployee = ( id, callback ) => {
    const employee = employees.find( employee => employee.id === id)?.name;

    if (employee) {
        callback( null, employee );
    } else {
        callback( `There isn't employee with id ${id}` )
    }
};

const getWage = ( id, callback ) => {
    const wage = wages.find( wage => wage.id === id )?.wage;
    if (wage) {
        callback( null, wage )
    } else {
        callback( `There isn't wage for employee with id ${id}` )
    }
};

// El CALLBACK HELL se presenta cuando exiten varias funciones anidadas

getEmployee( id, ( err, employee ) => {
    if (err) {
        return console.log(err);
    }

    getWage ( id, ( err, wage ) => {
        if (err) {
            return console.log(err);
        }
        console.log(`${employee}'s wage is ${wage}`);
    });
});

