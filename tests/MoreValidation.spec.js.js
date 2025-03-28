const {test, expect} = require('@playwright/test');

test("More Validations",async({page})=>
{
    
    await page.goto("https://rahulshettyacademy.com/AutomationPractise/");
    await page.goto("https://google.com");
    await page.goBack();
    await page.goForward();
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    //await page.pause();
    //alert box
    page.on('dialog', dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    //hover
    await page.locator("#mousehover").hover();
    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href*='lifetime-accss']:visible").click();
        const textCheck = await framesPage.locator(".text h2").textContent();
        console.log(textCheck.split(" ")[1]);
    



})