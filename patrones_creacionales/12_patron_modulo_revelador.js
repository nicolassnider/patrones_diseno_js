//fetch no existe dentro de node, ejecutar en el navegador
const Users =  (()=>{
	const recurso = 'https://jsonplaceholder.typicode.com/users';
	return {
		listar: async () => {
			return await fetch(recurso).then((r) => r.json());
		},
		crear: async (data) => {
			return await fetch(recurso, {
				type: 'POST',
				body: JSON.stringify(data),
			}).then((r) => r.json());
		},
	};
})();
