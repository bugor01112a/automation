const { I } = inject();

module.exports = {
//начало локаторы
myAccountLink: { xpath: '//span[text()="My Account"]' },
registrationLink: { xpath: '//*[@id="top-links"]//li[1]/a' },
verifyRegisterAccount: "Register Account",



//начало методы
openRegistrationPage (){
    I.click(this.myAccountLink);
    I.click(this.registrationLink);
    I.see(this.verifyRegisterAccount);
}

  
}
// вставьте сюда свои локаторы и методы.