const { assert } = require('chai');
const { Builder, Browser, By, Key, until, Select, include } = require('selenium-webdriver');


describe("Check responsiveness", function() {
    it("Verify that the form is responsive", async function() {
        driver = await new Builder().forBrowser(Browser.CHROME).build();

        const width = 1000;
        const height = 1000;
        await driver.manage().window().setSize(width, height);  
    
        //visit the site
        await driver.get('https://www.interactivecares.com/business');
    
        // await driver.manage().setTimeouts({implicit: 2000});
    
        const element = await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div[4]/div/section[1]/div/div/div[1]/div[2]/button'))
        await driver.wait(until.elementIsVisible(element), 3000);
        await driver.executeScript("arguments[0].scrollIntoView(true);", element)
        
        await element.click()
    
        await driver.manage().setTimeouts({implicit: 2000});
        //check if the form appears
        let form = await driver.findElement(By.xpath("//form[@class='p-5']"))
        await driver.wait(until.elementIsVisible(form), 3000);
        let formAppears = await form.isDisplayed()
        assert.equal(formAppears, true)
    
        //enter valid inputs
        let firstName = await driver.findElement(By.xpath("//input[@placeholder='Enter your First Name']")).sendKeys("John")
    
        let lastName = await driver.findElement(By.xpath("//input[@placeholder='Enter your Last Name']")).sendKeys("Doe")
    
        let phoneNumber = await driver.findElement(By.xpath("//input[@type='tel']")).sendKeys("12345678921")
    
        let emailAddress = await driver.findElement(By.xpath("//input[@type='email']")).sendKeys("doe@gmail.com")
    
        let companyName = await driver.findElement(By.xpath("//input[@placeholder='Enter your Company Name']")).sendKeys("interactive cares")
    
        let companyAddress = await driver.findElement(By.xpath("//input[@placeholder='Enter your Company Address']")).sendKeys("dhanmondi")
    
        let size = await driver.findElement(By.xpath("//form[@class='p-5']/div[4]/div[1]/select/option[2]")).click()
    
        let trainees = await driver.findElement(By.xpath("//form[@class='p-5']/div[4]/div[2]/select/option[2]")).click()
    
        let preferredTopic = await driver.findElement(By.xpath("//input[@placeholder='Enter your Preferred Topic']")).sendKeys("automation")
    
        let role = await driver.findElement(By.xpath("//input[@placeholder='Enter your Role']")).sendKeys("QA")
    
        let description = await driver.findElement(By.tagName("textarea")).sendKeys("This is a testing submission")
    
        //Submit the form
        await driver.findElement(By.xpath("//form/div[7]/button[@type='submit']")).submit()
    
        //check the success message
        let pageSource = await driver.getPageSource();
        let isEmailSent = pageSource.includes("Email sent successfully");
    
        //check if redirected to correct url
        let currentUrl = await driver.getCurrentUrl();
        assert.equal(currentUrl, "https://www.interactivecares.com/business")
    
        await driver.quit();
    })
})


