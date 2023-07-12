const perro = {
	raza: 'Pastor Alemán',
	ladrar: /* si usamos una arrow function da undefined (no tiene contexto de this) */
	function(){
		console.log(`Soy un ${this.raza} y estoy ladrando`);
	}
}

const kiltro = Object.create(perro);
kiltro.ladrar();
console.log(kiltro) //vacío

kiltro.raza = 'Kiltro';
kiltro.ladrar();