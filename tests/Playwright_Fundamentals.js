
import {test, expect} from '@playwright/test'

test('My first test case', async ({page})=>{

    await page.goto("https://www.demoblaze.com/index.html");
    
    expect(page).toHaveTitle("STORE");

    const products = await page.$$("//div[@id='tbodyid']//h4/a")

    for(const product of products){
        const prodname = await product.textContent()
        console.log(prodname)

        if(prodname.trim()==='Nexus 6'){
            await product.click()
            await page.pause();
        }
        
    }

})