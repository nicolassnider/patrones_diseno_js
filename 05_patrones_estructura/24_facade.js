const https = require('https');

const get = (url) =>
	new Promise((resolve, reject) => {
		const comp = url.split('/');
		const host = comp.shift();
		const options = {
			host: host,
			path: `/${comp.join('/')}`,
			method: 'GET',
		};

		const req = https.request(options, (res) => {
			res.setEncoding('utf8');
			let body = '';
			res.on('data', (d) => {
				body += d;
			});

			res.on('end', () => {
				const parsed = JSON.parse(body);
				console.log(parsed);
				resolve(parsed);
			});
		});

		req.on('error', (e) => {
			console.error(e);
			reject(e);
		});
		req.end();
	});

const main = async () => {
	//simplifica el uso de https
	const result =  await get('jsonplaceholder.typicode.com/users');
	console.log(result);
}


main();

