const getCapture = require('./get_capture.js').getCapture;
const cron       = require('node-cron');

cron.schedule('*/10 * * * *', () => {
	getCapture();
	console.log('capture success');
});
