const {test, expect, request} = require('@playwright/test');
const exp = require('constants');
const loginPayload = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"}
let token;

test.beforeAll( async ()=>
{
   const apiContext =  await request.newContext();
   const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data: loginPayload
    }
   )
   expect ((loginResponse).ok()).toBeTruthy();
   const loginResponseJson = await loginResponse.json();
   const token = loginResponseJson.token;
   console.log(token);


});

test.beforeEach(()=>
    {
    
    })
    

test('Client app login ',  async ({page})=>
    {


    })
