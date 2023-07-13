class Persona {
	constructor(){
		this.nombre = 'Nicolás';
		
	}
	saludar(){
		console.log(`Hola ${this.nombre}`);
	}
}

class Perro extends Persona{
	//extendemos de persona porque también tiene nombre
	constructor(){
		super();
		this.sistemaDigestivo = 'sistema digestivo de perro';
	}
}

class PerroRobot extends Perro{
	//extendemos de perro pero va a contener un sistema disgestivo de perro
}


//usando composicion
const saludar = name => console.log(`Hola soy ${name}`);
const despedir = name => console.log(`Adios`);
const dormir = name => console.log(`zzzz`);

const persona = {
	nombre: 'Nicolás',
	saludar: () => saludar(persona.nombre)
}

class PersonaComposicion{
	constructor(){
		this.nombre = 'nicoPErsonaComposicion'
	}
	saludar(){
		saludar(this.nombre);
	}
	despedir(){despedir()}
	dormir(){dormir()}
}

const perro = {
	nombre: 'Tobi',
	saludar: () => console.log('Guau'),
}

persona.saludar();
perro.saludar();

