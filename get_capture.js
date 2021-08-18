require('dotenv').config();
const puppeteer = require('puppeteer');

const getCapture = () => {

	(async () => {

		const browser = await puppeteer.launch({
			args: ['--no-sandbox', '--disable-setuid-sandbox'],
			defaultViewport: {width: 2000, height: 3000},
			headless: true,
		});

		const page = await browser.newPage();

		await Promise.all([
			page.waitForNavigation({ waitUntil: 'networkidle0' }),
			page.goto(process.env.URL),
			page.waitForTimeout(1000),
		]);

		await page.screenshot({ path: 'captures/'+createPrefix()+'_capture.png' });
		await browser.close();
		// process.exit(0);

	})();

}

const createPrefix = () => {

	const date = new Date();
	const y = date.getFullYear();
	const m = date.getMonth()+1;
	const d = date.getDate();
	const h = date.getHours();
	const i = date.getMinutes();

	return y+'_'+m+'_'+d+'_'+h+'_'+i;

}

// getCapture();

module.exports = {
	getCapture:getCapture,
}
