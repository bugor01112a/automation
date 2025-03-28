const { pause } = require("codeceptjs");

Feature("store");

Scenario("test registration", ({ I , objectsPage}) => {
  I.amOnPage("http://opencart.qatestlab.net/index.php");
    objectsPage.openRegistrationPage();//объект из pajes/objects.js

  I.fillField({ xpath: '//*[@id="input-firstname"]' }, "Va");
  I.fillField({ xpath: '//*[@id="input-lastname"]' }, "5555");
  I.fillField({ xpath: '//*[@id="input-email"]' }, "311737@gmail.com");
  I.fillField({ xpath: '//*[@id="input-telephone"]' }, "1598741235");
  I.fillField({ xpath: '//*[@id="input-password"]' }, "9999999999");
  I.fillField({ xpath: '//*[@id="input-confirm"]' }, "9999999999");
  I.click({xpath: '//*[@id="content"]/form/fieldset[3]/div/div/label[1]'});
  I.click({ xpath: '//*[@name="agree"]' });
  I.click({ xpath: '//*[@class="btn btn-primary"]' });
  //pause();
  I.see("Your Account Has Been Created!");
  
});


