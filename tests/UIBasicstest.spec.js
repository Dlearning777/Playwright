const {test, expect} = require('@playwright/test');
const { use } = require('../playwright.config');
const { text } = require('stream/consumers');

test('First Playwright test', async ({browser})=>
{
// playwright code-

//chrome -plugins/ cookies


const context =  await browser.newContext();
const page = await context.newPage();
const userName = page.locator('#username');
const signIn = page.locator("#signInBtn");
const cardTitles = page .locator(".card-body a");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await userName.fill("rahulshetty");
await page.locator("[type='password']"). fill("learning");
await signIn.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');
await userName.fill("");
await userName.fill("rahulshettyacademy");
await signIn.click();
console.log(await cardTitles.nth(1).textContent());
// using first 
console.log(await cardTitles.first().textContent());
const allTitles = await cardTitles.allTextContents();
console.log(allTitles);






});

test('UI control test', async ({page})=>
    {
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const documentLink = page.locator("[href*='documents-request']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("Consultant");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked()); //boolen value -in case of checkbox checked
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();//uncheck radio button scenario
    expect( await page.locator("#terms").isChecked()).toBeFalsy();
    // verifying blinking animation text
    await expect(documentLink).toHaveAttribute("class", "blinkingText");
     //await page.pause();
    

    });


    test('Child window handling', async ({browser})=>
        {
            const context = await browser.newContext();
            const page = await context.newPage();
            const userName = page.locator("#username");
            await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
            const documentLink = page.locator("[href*='documents-request']"); 
            const [newPage] = await Promise.all([
            context.waitForEvent('page'),//listen for any new page 
            documentLink.click(),
        ])
            const text = await newPage.locator(".red").textContent();
            const arrayText = text.split("@")
            const domain = arrayText[1].split(" ")[0]
             console.log(domain);
             // switch to parent page
             await page.locator("#username").type(domain);
             //await page.pause();
             console.log(await page.locator("#username").textContent());

        });
