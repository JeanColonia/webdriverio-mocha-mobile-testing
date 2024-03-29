class ZaraPurchaseScreen{

 get enterBtn(){
  return $('//android.widget.TextView[@text="ENTER"]');
 }



 
 get useOfCookies(){
  return $('//android.widget.TextView[@text="ACCEPT"]');
 }
 
 get touchOutside(){
  return $('//android.view.View[@resource-id="com.inditex.zara:id/touch_outside"]')
 }
 get searchBtn(){
  return $('//android.widget.TextView[@text="SEARCH"]');
 }


 get searchInput(){
  return $('//android.widget.EditText[@resource-id="com.inditex.zara:id/search_text_field_edit_text"]');

  // KEYS ENTER
 }


 async product(product_){

  return $(`//android.widget.TextView[@text="${product_}"]`);
  
 }

 get colorTwo(){
  return $('(//android.widget.ImageView[@resource-id="com.inditex.zara:id/colorPickerBorder"])[2]');
 }

 get colorThree(){
  return $('(//android.widget.ImageView[@resource-id="com.inditex.zara:id/colorPickerBorder"])[3]');
 }


 get productInfoContainer(){
  return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.inditex.zara:id/recycler_view"]/android.view.ViewGroup[2]');
 }


 get productInfoScroll(){
  
  return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

 }


 get addToBagBtn(){
  return $('//*[@resource-id="com.inditex.zara:id/addButton"]')
 }

 async selectSize(size_){
  return $(`//*[@text="${size_}"]`)
 }

 get viewShoppingBag(){
  return $('//*[@resource-id="com.inditex.zara:id/basketButtonText"]');
 }


 get productTitle(){
  return $('//*[@resource-id="com.inditex.zara:id/basketProductTitle"]')
 }

}


module.exports = new ZaraPurchaseScreen();