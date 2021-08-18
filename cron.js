const getCapture = require('./get_capture.js').getCapture;
const cron       = require('node-cron');

cron.schedule('*/1 * * * *', () => {
	getCapture();
	console.log('capture success');
});
