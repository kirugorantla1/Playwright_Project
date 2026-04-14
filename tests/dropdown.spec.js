
const{test,expect} = require('@playwright/test')

test("Select values from dropdown", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.locator("//select[@id='state']").selectOption({label :"Goa"})
    await page.waitForTimeout(2000)
    await page.locator("//select[@id='state']").selectOption({value :"Andhra Pradesh"})
    await page.waitForTimeout(2000)
    await page.locator("//select[@id='state']").selectOption({index :4})
    await page.waitForTimeout(2000)
    const value = await page.locator("//select[@id='state']").textContent();
    console.log("All dropdown values are", value)
    await expect(value.includes("West Bengal")).toBeTruthy();


    //instead of locator we can use $$ - Multiple options
let ddstatus =false;
    await page.$("#state");
  let allElements=   await page.$$("option");
  for(let i =0; i<allElements.length; i++){
    let element = allElements[i];
    let value = await element.textContent();
    console.log("All values are", value)

    if(value.includes("Rajasthan")){
        ddstatus = true
        break

    }
  }
await expect(ddstatus).toBeTruthy();


})