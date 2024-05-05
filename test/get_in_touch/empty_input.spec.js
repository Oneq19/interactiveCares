const { Builder, Browser, By, Key, until, Select } = require('selenium-webdriver');
const assert = require("assert");


describe("Check for empty fields", function() {
    it("Verify if proper required message is shown if user keeps fields empty", async function() {
        driver = await new Builder().forBrowser(Browser.CHROME).build();

        //visit the site
        await driver.get('https://www.interactivecares.com/business');

        await driver.manage().setTimeouts({implicit: 500});

        //find the button and click it
        let getInTouchBtn = await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div[4]/div/section[1]/div/div/div[1]/div[2]/button'))
        await getInTouchBtn.click()

        //check if the form appears
        let form = await driver.findElement(By.xpath("//form[@class='p-5']"))
        await driver.wait(until.elementIsVisible(form), 3000);
        let formAppears = await form.isDisplayed()
        assert.equal(formAppears, true)

        await driver.findElement(By.xpath("//form/div[7]/button[@type='submit']")).submit()

        let firstName = await driver.findElement(By.xpath("//form[@class='p-5']/div[1]/div[1]/div/span[2]")).getText().then(textValue => {
            assert.equal('This field is required', textValue);
        });

        let lastName = await driver.findElement(By.xpath("//form[@class='p-5']/div[1]/div[2]/div/span[2]")).getText().then(textValue => {
            assert.equal('This field is required', textValue);
        });

        let phoneNumber = await driver.findElement(By.xpath("//form[@class='p-5']/div[2]/div[1]/div/span[2]")).getText().then(textValue => {
            assert.equal('This field is required', textValue);
        });

        let emailAddress = await driver.findElement(By.xpath("//form[@class='p-5']/div[2]/div[2]/div/span[2]")).getText().then(textValue => {
            assert.equal('This field is required', textValue);
        });

        let companyName = await driver.findElement(By.xpath("//form[@class='p-5']/div[3]/div[1]/div/span[2]")).getText().then(textValue => {
            assert.equal('This field is required', textValue);
        });

        let companyAddress = await driver.findElement(By.xpath("//form[@class='p-5']/div[3]/div[2]/div/span[2]")).getText().then(textValue => {
            assert.equal('This field is required', textValue);
        });

        let size = await driver.findElement(By.xpath("//form[@class='p-5']/div[4]/div[1]/div/span[2]")).getText().then(textValue => {
            assert.equal('This field is required', textValue);
        });

        let trainees = await driver.findElement(By.xpath("//form[@class='p-5']/div[4]/div[2]/div/span[2]")).getText().then(textValue => {
            assert.equal('This field is required', textValue);
        });

        let preferredTopic = await driver.findElement(By.xpath("//form[@class='p-5']/div[5]/div[1]/div/span[2]")).getText().then(textValue => {
            assert.equal('This field is required', textValue);
        });

        let role = await driver.findElement(By.xpath("//form[@class='p-5']/div[5]/div[2]/div/span[2]")).getText().then(textValue => {
            assert.equal('This field is required', textValue);
        });

        let description = await driver.findElement(By.xpath("//form[@class='p-5']/div[6]/div/span[2]")).getText().then(textValue => {
            assert.equal('This field is required', textValue);
        });

        //check if the form is still there
        let formStillThere = await driver.findElement(By.xpath("//form[@class='p-5']")).isDisplayed()
        assert.equal(formStillThere, true)

        await driver.quit();
    })
})











