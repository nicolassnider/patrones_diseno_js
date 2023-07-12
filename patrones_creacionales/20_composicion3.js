const users = [
	{ edad: 17, nombre: 'Nicolas', apellido: 'Soto' },
	{ edad: 18, nombre: 'Juan', apellido: 'Perez' },
	{ edad: 19, nombre: 'Pedro', apellido: 'Fernandez' },
	{ edad: 1, nombre: 'Maria', apellido: 'Ramirez' },
];

//estas funciones iran a un archivo de utils
const compose = (...funciones)=>x=>funciones.reduceRight((y,f)=>f(y),x)
const filter = f=>xs=>xs.filter(f)
const head = (xs) => xs[0]; //devuelve el primer elemento de la lista
const formateo = (x) => ({
	nombreCompleto: `${x.nombre} ${x.apellido}`,
	edad: x.edad,
});
const formato = (x) => `${x.nombreCompleto} tiene ${x.edad} año(s)`;
//

const traerPrimerInfante = (data) => {
	compose(
		formato, 
		formateo,
		head,
		filter(x=>x.edad<2)
	)(data)
};


console.log(traerPrimerInfante(users))
/* const traerPrimerInfante = data =>{
	const infantes = data.filter(x=>x.edad<2)
	const primerInfante = infantes[0]
	const infante ={
		nombreCompleto : `${primerInfante.nombre} ${primerInfante.apellido}`,
		edad: primerInfante.edad
	}
	return `${infante.nombreCompleto} tiene ${infante.edad} año(s)`
} */

/* f(g(x)) */