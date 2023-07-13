const users =[
	{edad:17, nombre:'Nicolas', apellido:'Soto'},
	{edad:18, nombre:'Juan', apellido:'Perez'},
	{edad:19, nombre:'Pedro', apellido:'Fernandez'},
	{edad:1, nombre:'Maria', apellido:'Ramirez'},
]
const head = xs =>xs[0] //devuelve el primer elemento de la lista
const traerPrimerInfante = data =>{
	const infantes = data.filter(x=>x.edad<2)
	const primerInfante = infantes[0]
	const infante ={
		nombreCompleto : `${primerInfante.nombre} ${primerInfante.apellido}`,
		edad: primerInfante.edad
	}
	return `${infante.nombreCompleto} tiene ${infante.edad} año(s)`
}