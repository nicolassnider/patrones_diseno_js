const Emitter = (() => {
	const topics = {};
	const hOP = topics.hasOwnProperty;

	return {

		// Suscribirse a un evento
		on: (topic, listener) => {
			if (!hOP.call(topics, topic)) topics[topic] = [];
			topics[topic].push(listener);
		},
		// despachar con info extra
		emit: (topic, info) => {
			if (!hOP.call(topics, topic)) return;
			topics[topic].forEach((item) =>
				item(info != undefined ? info : {})
			);
		},
	};
})();


Emitter.on('lala',x=>console.log(x))

Emitter.emit('lala', {lala:'lolo'})