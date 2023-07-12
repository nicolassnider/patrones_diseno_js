const modulo = {
	//propiedades
	prop: 'mi prop',
	//objetos
	config:{
		lenguaje:'es',
		cache:true
	},
	//metodos
	setConfig: conf =>{
		modulo.config = conf;
	},
	isCacheEnabled: () => {
		console.log(modulo.config.cache?'Cache habilitado':'Cache deshabilitado')
	}
}