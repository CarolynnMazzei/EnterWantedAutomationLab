import { EnterWantedPage } from "./EnterWantedPage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new EnterWantedPage(driver);

test("search title css", async () => {
  jest.setTimeout(100000);
  console.log("Navigate");
  await page.navigate();
  console.log("Get Page Title CSS");
  let titles = await page.getTitle();
  expect(titles[0]).toContain("Enter Wanted");
}
);

test("search headers css", async () => {
  //jest.setTimeout(40000);
  //console.log("Navigate");
  //await page.navigate();
  
  let titles = await page.getHeaders();
  expect(titles[11]).toContain("Drivers License");
}
);

afterAll(async () => {
  await driver.quit();
});