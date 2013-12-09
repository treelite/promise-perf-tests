// Load all promise impls
module.exports = {
	when: require('./adapters/when'),
	avow: require('./adapters/avow'),
	q: require('./adapters/q'),
	deferred: require('./adapters/deferred'),
	rsvp: require('./adapters/rsvp'),
	saber: require('./adapters/saber-promise')
};
