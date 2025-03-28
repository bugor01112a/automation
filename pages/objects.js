const { I } = inject();

module.exports = {
  //начало локаторы
  dropDownMyAccount: { xpath: '//ul[@class="toggle_cont"]' }, //локатор выпад. списка "My Account"
  dropDownMyAccountRegistration: { xpath: '//a[text()="Register"]' }, //локатор выпад. списка "My Account/Register"

  //начало методы
  registrationPage() {
    I.click(this.dropDownMyAccount); // клик по "My Account"
    I.click(this.dropDownMyAccountRegistration); // клик по "Register"
  },
};
// вставьте сюда свои локаторы и методы.
