const users = [
	{ edad: 17, nombre: 'Nicolas', apellido: 'Soto' },
	{ edad: 18, nombre: 'Juan', apellido: 'Perez' },
	{ edad: 19, nombre: 'Pedro', apellido: 'Fernandez' },
	{ edad: 1, nombre: 'Maria', apellido: 'Ramirez' },
  ];
  
  // Estas funciones irán a un archivo de utils
  const compose =
	(...funciones) =>
	(x) =>
	  funciones.reduce((y, f) => f(y), x);
  
  const filter = (f) => (xs) => xs.filter(f);
  const head = (xs) => xs[0]; // Devuelve el primer elemento de la lista
  const formateo = (x) => ({
	nombreCompleto: `${x.nombre} ${x.apellido}`,
	edad: x.edad,
  });
  const formato = (x) => `${x.nombreCompleto} tiene ${x.edad} año(s)`;
  const trace = (x) => (y) => {
	console.log(x, y);
	return y;
  };
  
  const traerPrimerInfante = (data) => {
	const result = compose(
	  filter((x) => x.edad < 2),
	  trace('después de filter'),
	  head,
	  formateo,
	  formato
	)(data);
	console.log(result);
  };
  
  traerPrimerInfante(users);