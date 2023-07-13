let mixin = {
	saludar(){
		console.log(`Hola ${this.nombre}`);
	},
	despedir(){
		console.log(`Chau ${this.nombre}`);
	}
};

//clase
class Usuario{
	constructor(nombre){
		this.nombre = nombre;
	}
}

//aumenta el prototipo
Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario('Nicolás');

usuario.saludar();
usuario.despedir();