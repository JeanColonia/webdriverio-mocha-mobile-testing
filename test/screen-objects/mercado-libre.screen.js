
class MercadoLibreMainScreen{

constructor() {
}


async click(ele) {

 await ele.waitForClickable({ timeout: 5000 });
 if (!ele.elementId) {
  throw Error(`Error searching element : ${ele.error.message}`);
 }

}


async typeInto(ele, text) {

 await ele.waitForDisplayed({ timeout: 5000 });

 if (!ele.elementId) {

  throw Error(`Error searching element : ${ele.error.message}`);
 }

 await ele.setValue(text);
}



//scroll

//alerts

//

}


export default new MercadoLibreMainScreen();