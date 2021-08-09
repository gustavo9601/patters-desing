const resultado = (() => {
    // Valor privado
    const x = {}

    // Valores publicos accesibles
    return {
        a: () => console.log(x),
        b: (key, value) => x[key] = value
    }

})();

resultado.a();
resultado.b('llave', 'valor');
resultado.a();


/*
*
* Ejemplo
* */

const Users = (() => {
    const api = 'https://jsonplaceholder.typicode.com/users';

    return {
        listar: async () => {
            return await fetch(api).then(x => x.json());
        },
        crear: async (data) => {
            return await fetch(api, {type: 'POST', body: JSON.stringify(data)}).then(x => x.json());
        }
    }
})();

Users.listar();
