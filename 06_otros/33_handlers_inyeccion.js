module.exports.get = axios =>  //inyeccion de axios
async (req, res) => {
	const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
	res.send(data)
}

module.exports.post = (axios,db,storage,auth) =>  //inyeccion de varias dependencias
async (req, res) => {
	const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
	res.send(data)
}
