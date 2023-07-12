class MiClase {
	constructor(propiedad1, propiedad2) {
		this.propiedad1 = propiedad1;
		this.propiedad2 = propiedad2;
		this.metodo = () => {
			console.log('Soy un método');
			console.log(`Soy la propiedad ${this.propiedad1}`);
		};
	}
}

const instancia = new MiClase(4);
console.log(instancia);
instancia.metodo();
