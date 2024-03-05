
const ZaraPurchaseScreen = require('../../screen-objects/android/ZaraPurchase.screen.js');

const requestData = require('../../data/pants-request-data.json');

describe('Zara App', () => {
 
 it('Purchase a product from Zara App',async () => {
  
  await driver.pause(500);

 await ZaraPurchaseScreen.enterBtn.click();

 await driver.pause(1000);

 const flagCookies = await  ZaraPurchaseScreen.useOfCookies.isDisplayed();
 if(flagCookies){
  await ZaraPurchaseScreen.useOfCookies.click();
 }
 
await driver.pause(1000);
const flagTouchOutside = await ZaraPurchaseScreen.touchOutside.isDisplayed();
 if(flagTouchOutside){
   await ZaraPurchaseScreen.touchOutside.click();
 }
await driver.pause(1000);
await ZaraPurchaseScreen.searchBtn.click();
await driver.pause(1000);
await ZaraPurchaseScreen.searchInput.setValue(requestData.productType);
await driver.pause(1000);
await driver.keys("Enter");
await driver.pause(1000);
const product = await ZaraPurchaseScreen.product(requestData.productDescription);
await product.click();

await driver.pause(1000);

const colorTwo = await ZaraPurchaseScreen.colorTwo.isDisplayed();
if(colorTwo){
 await ZaraPurchaseScreen.colorTwo.click();
}


const colorThree = await ZaraPurchaseScreen.colorThree.isDisplayed();
if(colorThree){
 await ZaraPurchaseScreen.colorThree.click();
}

await driver.pause(1000);


await ZaraPurchaseScreen.productInfoScroll;
await driver.pause(1000);
await ZaraPurchaseScreen.addToBagBtn.click();

await driver.pause(1000);
const size = await ZaraPurchaseScreen.selectSize(requestData.productSize);
await size.click();


await driver.pause(1000);
await ZaraPurchaseScreen.viewShoppingBag.click();

//assert name of product in shopping bag
await driver.pause(1000);
await expect(await ZaraPurchaseScreen.productTitle).toHaveText(requestData.productDescription);

await driver.pause(2000);

 });

});