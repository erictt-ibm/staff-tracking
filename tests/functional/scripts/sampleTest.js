module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('https://staff-tracking.mybluemix.net/')
      .waitForElementVisible('body', 60000, true,
        function(){}, 'Waiting for body to become visible')
      .waitForElementPresent('h1.text-uppercase', 60000)
      .pause(5000)
      .end();
  }
};