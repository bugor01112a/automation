Feature("autorisationUser");

Scenario("test auturisation", ({ I }) => {
  I.amOnPage("http://opencart.qatestlab.net/index.php"); 
  I.click({xpath: '//*[text()="Sign In"]'});
  I.see('Returning Customer');
  I.fillField({xpath:'//input[@id="input-email"]'},'g11ad@gmail.com' );
  I.fillField({xpath:'//input[@id="input-password"]'}, 987654);
  I.click('//input[@value="Login"]');
  I.see('My Account');
  //pause();
});