Feature("autorisationUser");

Scenario("test auturisation", ({ I }) => {
  I.amOnPage("http://opencart.qatestlab.net/index.php");
  I.click({ xpath: "//*[text()='Sign In']" });
  I.fillField({xpath: "//input[@id= 'input-email']"},"3117@gmail.com");
  I.fillField({xpath: "//input[@id='input-password']"}, "9999999999");
  I.click({xpath: "//input[@class='btn btn-primary']"});
  //pause();
  I.see("Edit your account information");
  
});