import { By, until, WebDriver } from "selenium-webdriver";

export class EnterWantedPage {

  driver: WebDriver;
  
  url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
 

  title: By = By.css(".titleBar");

  header: By = By.css(".fieldHeader");

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.title));
  }



  async getTitle() {
    let titles = [];
    console.log("read element");
    await this.driver.wait(until.elementsLocated(this.title));
    console.log("read find element");
    let elements = await this.driver.findElements(this.title);
    for (let i = 0; i < elements.length; i++) {
      titles.push(await (await elements[i].getText()));
    }

    console.log("Titles == " + titles);

    return titles;
  }

  async getHeaders() {
    let titles = [];
    console.log("read header");
    await this.driver.wait(until.elementsLocated(this.header));
 
    let elements = await this.driver.findElements(this.header);
    for (let i = 0; i < elements.length; i++) {
      titles.push(await (await elements[i].getText()));
    }

    console.log("Headers == " + titles);

    return titles;
  }
}

const sendKeys = async function (driver, elementBy: By, keys) {
  await driver.wait(until.elementLocated(elementBy));
  return driver.findElement(elementBy).sendKeys(keys);
};
const click = async function (driver, elementBy: By) {
  await driver.wait(until.elementLocated(elementBy));
  return (await driver.findElement(elementBy)).click();
};