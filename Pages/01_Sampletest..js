import { test, expect } from '@playwright/test';

test("My first test case is ", async({page})=>{
    expect(123).toBe(123)
})


test.skip("My second test case is ", async({page})=>{
    expect(12).toBe(23)
})

test("My third test case is ", async({page})=>{
    expect(14).toBe(14)
})

test("My fourth test cas is", async ({page})=>{
    expect("Kiran Kumar").toContain("Kiran")
    expect(true).toBeTruthy();

})

test("My fifth test case is", async({page})=>{
    expect("Kiran Kumar".includes("Kiran").toBeTruthy)
})