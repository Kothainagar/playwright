import {test} from '@playwright/test';

test(`CSS selector assignment`, async ({page}) => {
    await page.goto('http://leaftaps.com/opentaps/control/main/');

    await page.locator(`#username`).fill('DemoCSR');
    await page.locator(`#password`).fill('crmsfa');
    await page.locator(`.decorativeSubmit`).click();
    await page.locator(`a:has-text("CRM/SFA")`).click();
    await page.locator(`a:has-text("Leads")`).click();
    await page.locator(`a:has-text("Create Lead")`).click();
    await page.locator(`#createLeadForm_companyName`).fill('Anthropic');
    await page.locator(`#createLeadForm_firstName`).fill('Claude');
    await page.locator(`#createLeadForm_lastName`).fill('Shannon');
    await page.locator(`#createLeadForm_personalTitle`).fill('Mr.');
    await page.locator(`#createLeadForm_generalProfTitle`).fill('AI Researcher');
    await page.locator(`#createLeadForm_annualRevenue`).fill('19B');
    await page.locator(`#createLeadForm_departmentName`).fill('AI safety and research company');
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill('1000000');
    await page.locator(`[name="submitButton"]`).click();

    console.log('Page title is: ' + await page.title());

    await page.waitForTimeout(3000);
});