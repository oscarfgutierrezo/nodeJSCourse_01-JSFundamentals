// Un CALLBACK es cualquier función que se pasa como argumento a otra función

const getUserById = ( id, callback ) => {
    const user = {
        id,
        name: 'Fernando'
    }

    setTimeout( () => {
        callback(user)
    }, 1000);
};

getUserById( 10, ( user ) => {
    console.log( user.id);
    console.log( user.name.toUpperCase() );
});