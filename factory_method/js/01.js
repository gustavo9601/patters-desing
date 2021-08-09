class Cuerpo {

    altura;
    colorPiel;
    cabeza;
    cabello;
    ropa;
    nombre;

    constructor(propiedades) {
        this.altura = propiedades.altura;
        this.colorPiel = propiedades.colorPiel;
        this.nombre = propiedades.nombre;
    }

    asignarCabeza(cabeza) {
        this.cabeza = cabeza;
    }

    asignarCabello(cabello) {
        if (!this.cabeza) {
            throw new Error("Sin cabeza no hay cabello");
        }
        this.cabello = cabello;
    }

    asignarRopa(ropa) {
        this.ropa = ropa;
    }

    decirNombre() {
        console.log(`Mi nombre es ${this.nombre}`)
    }

}

class Cabeza {
    colorOjos;
    tamanoOjos;
    tamañoBoca;
    formaCabeza;

    constructor(propiedades) {
        this.colorOjos = propiedades.colorOjos;
        this.tamanoOjos = propiedades.tamanoOjos;
        this.tamañoBoca = propiedades.tamañoBoca;
        this.formaCabeza = propiedades.formaCabeza;
    }
}

class Cabello {

    longitudPelo;
    color;
    estilo;
    accesorio;

    constructor(propiedades) {
        this.longitudPelo = propiedades.longitudPelo;
        this.color = propiedades.color;
        this.estilo = propiedades.estilo;
        this.accesorio = propiedades.accesorio;
    }
}

class Ropa {

    tipo;
    color;
    zapatos;

    constructor(propiedades) {
        this.tipo = propiedades.tipo;
        this.color = propiedades.color;
        this.zapatos = propiedades.zapatos;
    }
}

function crearMuneca(propiedades) {

    let muneca = new Cuerpo(propiedades);
    muneca.asignarCabeza(new Cabeza(propiedades));
    muneca.asignarCabello(new Cabello(propiedades));
    muneca.asignarRopa(new Ropa(propiedades));
    return muneca;
}

//Fábrica de muñecas
let propiedades = {
    nombre: "Eli",
    cabeza: {
        colorOjos: "azul",
        tamanoOjos: "mediano",
        tamañoBoca: "pequena",
        formaCabeza: "ovalada"
    },
    cabello: {
        longitudPelo: "largo",
        color: "cafe",
        estilo: "flequillo",
        accesorio: "lazo"
    },
    cuerpo: {
        altura: 5,
        colorPiel: "oliva"
    },
    ropa: {
        tipo: "vestido",
        color: "morada",
        zapatos: "tenis" //zapatillas de goma
    }
}

let muneca = crearMuneca(propiedades);
muneca.decirNombre();
