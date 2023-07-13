/* const y = 'fafa'; */
/* const f = () => {
	const x = 'lala';
	console.log(x, y);
}; */

/* const g = () => {
	const a = 'kaka';
	console.log(a, y);
	console.log(a, x); // x is not defined
}; */
/* f();
g(); */

//console.log(x); // x is not defined

const y = 'lele'
const f=() =>{
	const x = 'lala';
	return()=>{
		const z = 'lolo';
		console.log(x, y, z); // z se encuentra en otro alcanza, al cual f no tiene acceso
	}

}
