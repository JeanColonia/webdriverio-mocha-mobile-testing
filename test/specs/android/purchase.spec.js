
const ZaraPurchaseScreen = require('../../screen-objects/android/ZaraPurchase.screen.js');

const requestData = require('../../data/pants-request-data.json');

describe('Zara App', () => {
 
 it('Purchase a product from Zara App',async () => {
  
  await driver.pause(500);

 await ZaraPurchaseScreen.enterBtn.click();

await ZaraPurchaseScreen.useOfCookies.click();

await ZaraPurchaseScreen.touchOutside.click();

await ZaraPurchaseScreen.searchBtn.click();

await ZaraPurchaseScreen.searchInput.setValue(requestData.productType);

await driver.keys("Enter");
 
const product = await ZaraPurchaseScreen.product(requestData.productDescription);
await product.click();


await ZaraPurchaseScreen.colorTwo.click();
await driver.pause(1000);

await ZaraPurchaseScreen.colorThree.click();
await driver.pause(1000);


await ZaraPurchaseScreen.productInfoScroll;

await ZaraPurchaseScreen.addToBagBtn.click();


const size = await ZaraPurchaseScreen.selectSize(requestData.productSize);
await size.click();


await driver.pause(1000);
await ZaraPurchaseScreen.viewShoppingBag.click();

//assert name of product in shopping bag

await expect(await ZaraPurchaseScreen.productTitle).toHaveText(requestData.productDescription);

await driver.pause(2000);

 });

});