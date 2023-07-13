const fn = ()=>{
	ajax(()=>{
		ajax(()=>{})
	})
} // callback hell 


const fn1 = ()=>{
	ajax()
	.then(()=>{
		return ahax()
	})
	.then(()=>{
		return ahax()
	})
	.then(()=>{
		return ahax()
	})
} //todas las constantes no se ejecutan al mismo tiempo, se ejecutan en orden

const fnAsynAwait = async()=>{
	const resultado = await ajax()
}