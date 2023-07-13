const user = new USer();

const init = () => {
	//attach una funcion al evento
	user.on('login', userLoggedIn);
	user.on('login', retrieveInitData);
};

const userLoggedIn = () =>{
	//usuario inició sesión
}

app.init()

//en algún lugar de la app

const login = ()=>{
	//logica de inicio
	//...
	//luego;

	user.trigger('login');
}

login()