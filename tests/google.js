module.exports = {
    '@tags': ['google'],
   // '@disabled': true,
    'Google advance search: Elon Musk '(browser){
        const mainQuery = 'Elon Musk';
        
        const page = browser.page.googleAdvanceSearch();


        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_it')
            .selectFilter('@lastUpsdateDropdown', 'm')
            .search()

        browser
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
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