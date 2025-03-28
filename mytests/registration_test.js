const { pause } = require("codeceptjs");

Feature("store");

Scenario("test registration", ({ I, objectsPage }) => {
  I.amOnPage("http://opencart.qatestlab.net/index.php"); //загрузка главнойстраницы
   objectsPage.registrationPage(); //метод открытия страницы регистрации
  I.see("Register Account"); // подтверждение загрузки страницы с элементом "Register Account"
  I.fillField({ xpath: '//*[@id="input-firstname"]' }, "egor"); // заполнение поля "First Name"
  I.fillField({ xpath: '//*[@id="input-lastname"]' }, 5); // заполнение поля "Last Name"
  I.fillField({ xpath: '//*[@id="input-email"]'}, '111ad@gmail.com'); // заполнение поля "E-Mail"
  I.fillField({ xpath: '//*[@id="input-telephone"]'}, +65432); // заполнение поля "Telephone"
  I.fillField({ xpath: '//*[@id="input-password"]'}, 987654); // заполнение поля "Password"
  I.fillField({ xpath: '//*[@id="input-confirm"]'}, 987654); // заполнение поля "Password Confirm"
  I.click({ xpath: '//label[@class="radio-inline"][1]' }); // чекбокс Subscribe "Yes"
  I.click({ xpath: '//input[@name="agree"]' }); // чекбокс Privacy Policy "Yes"
  I.click({ xpath: '//input[@value="Continue"]' }); // клик "Continue"
I.see("Your Account Has Been Created!"); // подтверждение успешной регистрации "Your Account Has Been Created!"
  //pause();
});
