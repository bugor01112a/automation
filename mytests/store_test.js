const { pause } = require("codeceptjs");

Feature("store");

Scenario("test something", ({ I }) => {
  I.amOnPage("http://opencart.qatestlab.net/index.php");
  I.click({ xpath: '//span[text()="My Account"]' });
  I.click({ xpath: '//*[@id="top-links"]//li[1]/a' });
  I.see("Register Account");
  I.fillField({ xpath: '//*[@id="input-firstname"]' }, "Va");
  I.fillField({ xpath: '//*[@id="input-lastname"]' }, "5555");
  I.fillField({ xpath: '//*[@id="input-email"]' }, "12378@gmail.com");
  I.fillField({ xpath: '//*[@id="input-telephone"]' }, "1598741235");
  I.fillField({ xpath: '//*[@id="input-password"]' }, "9999999999");
  I.fillField({ xpath: '//*[@id="input-confirm"]' }, "9999999999");
  I.click({ xpath: '//*[@name="agree"]' });
  I.click({ xpath: '//*[@class="btn btn-primary"]' });
  I.see("Your Account Has Been Created!");
  pause();
});
