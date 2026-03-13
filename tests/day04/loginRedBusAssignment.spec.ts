import {firefox, test, webkit } from '@playwright/test';

test(`Load RedBus in Edge browser`, async () => {
    const browser = await webkit.launch()
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.redbus.in/');

    //print page title
    console.log('Page title is: ' + await page.title());

    //print page url
    console.log('Page url is: ' + page.url());

});


test(`Load Flipkart in Firebox browser`, async () => {
    const browser = await firefox.launch()
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.flipkart.com/');

    //print page title
    console.log('Page title is: ' + await page.title());

    //print page url
    console.log('Page url is: ' + page.url());
});

