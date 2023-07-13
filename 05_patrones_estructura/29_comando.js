const Commander = (()=>{
	//objeto privado con metodos de comprar y vender
	const o = {
		comprar: x =>{
			console.log(`comprando ${x}`)
		},
		vender: x =>{
			console.log(`vendiendo ${x}`)
		}
	}
	return{
		//metodo publico run, recibe el comando y los argumentos que deberían venir como un objeto
		run:(comando, argumentos)=>{
			if(!o[comando]){
				console.log(`comando no existe ${comando}`)
				return
			}
			o[comando](argumentos)
		}
	}
})()

Commander.run('comprar','BTC')
Commander.run('zaraza','BTC')