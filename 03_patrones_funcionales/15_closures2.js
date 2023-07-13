/* const f = (x)=>{
	return ()=>{console.log(`Rayos ${x}`)}
}
// se puede pasar el valor a una funcion, la segunda funcion se ejecuta en el contexto de la primera
f('fafa')(); */

const auditProps={
	createdAt:{default:new Date},
	updatedAt:{default:new Date},
	createdBy:{type: Schema.Types.ObectId, ref: 'User'},
	updatedBy:{type: Schema.Types.ObectId, ref: 'User'},
}

const Model = defaultProps =>{
	return (name, props)=>{
		const schema = mongoose.Schema({
			...defaultProps,
			...props,
		})
		return mongoose.model(name,schema);
	}
}

export const withAudit = Model(auditProps); //crear modelos que por defecto van a tener las propiedades de auditoria


//en otro archivo

//apunta a mongo, con audit y con las propiedades que se le pasan
withAudit('Product',{
	name:String,
	description:String,
})