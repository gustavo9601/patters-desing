class Universe {
    constructor(){
        // Si ya existe la instancia la retorna esa unica instanciacion
        if (Universe.instance) return Universe.instance;
    }
}

console.log(new Universe());
