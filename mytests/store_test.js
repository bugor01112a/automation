const { pause } = require("codeceptjs");

Feature("store");

Scenario.only("test something", ({ I }) => {
  I.amOnPage("http://opencart.qatestlab.net/index.php");
  I.click({ xpath: '//span[text()="My Account"]' });
  I.click({ xpath: '//*[@id="top-links"]//li[1]/a' });
  I.see("Register Account");
  I.fillField({ xpath: '//*[@id="input-firstname"]' }, "Va");
  I.fillField({ xpath: '//*[@id="input-lastname"]' }, "5555");
  I.fillField({ xpath: '//*[@id="input-email"]' }, "1231278@gmail.com");
  I.fillField({ xpath: '//*[@id="input-telephone"]' }, "1598741235");
  I.fillField({ xpath: '//*[@id="input-password"]' }, "9999999999");
  I.fillField({ xpath: '//*[@id="input-confirm"]' }, "9999999999");
  I.click({ xpath: '//*[@name="agree"]' });
  I.click({ xpath: '//*[@class="btn btn-primary"]' });
  I.see("Your Account Has Been Created!");
  //pause();
});

Scenario("grab", async ({ I }) => {
  I.amOnPage(
    "http://opencart.qatestlab.net/index.php?route=product/product&path=20_259&product_id=29");
    I.waitForVisible({xpath: '//*[@id="content"]//h2'});
  let price = await I.grabTextFrom({ xpath: '//div[@class="price"]/span[1]' });
  //pause();
  console.log(price);
});
