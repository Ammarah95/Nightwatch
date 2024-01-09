module.exports = {
    '@tags': ['google'],
   // '@disabled': true,
    'Google advance search: NashTech Global '(browser){
        const mainQuery = 'NashTech Global';
        const expectedTitle = 'NashTech Global Reviews - Glassdoor';
        
        const page = browser.page.googleAdvanceSearch();


        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_en')
            .selectFilter('@lastUpsdateDropdown', 'm')
            .search()
            .pause(1000)
            .assertTitle('h3', expectedTitle)
            
        

        browser
            .assert.urlContains('as_q=NashTech+Global', 'Params: Query is NashTech Global')
            .assert.urlContains('lr=lang_en', 'Params: Language is English')
            .assert.urlContains('as_qdr=m', 'Params: Time period is lastmonth')
      

         // const resultsPageQuerySelector=`#searchform input[name="q"][value="${mainQuery}"]`;
        // const resultsPageLanguageSelector ='[aria-label="Search Italian pages"]';
        // const resultsPageLastUpdateSelector ='[aria-label="Past month"]';

        //   browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
            // browser.assert.containsText(resultsPageLanguageSelector, 'UI: Language is set to italian');
            // browser.assert.containsText(resultsPageLastUpdateSelector, 'UI: Last update is set to past month');
        browser.saveScreenshot('tests_output/google.png')
    }
}