# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Evrgreen_test.spec.js >> The first test case is
- Location: tests\Evrgreen_test.spec.js:3:5

# Error details

```
Error: locator.allTextContents: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '///div[@class='flex justify-center flex-wrap gap-2 mb-8']/button' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:5935:25)
    at InjectedScript._queryEngineAll (<anonymous>:6645:49)
    at InjectedScript.querySelectorAll (<anonymous>:6632:30)
    at eval (eval at evaluate (:302:30), <anonymous>:2:33)
    at UtilityScript.evaluate (<anonymous>:304:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
```