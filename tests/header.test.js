const puppeteer = require('puppeteer');

test('Adds two numbers', () => {
  const sum = 3;

  expect(3).toEqual(3);
});

test('we can lunch a browser', async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('localhost:3000');

  const text = await page.$eval('a.brand-logo', (el) => el.innerHTML);

  expect(text).toEqual('Blogster');
});
