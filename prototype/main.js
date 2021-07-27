// Un prototipo del cual implementaran otros medtoros

const perro = {
  raza: 'Bulterrier',
  ladrar: function(){
      console.log(`Guauu! soy un ${this.ladrar}`)
  }
};

const perro1 = Object.create(perro);
perro1.ladrar();
