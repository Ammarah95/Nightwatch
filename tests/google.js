module.exports = {
    '@tags': ['google'],
    'Google advance search: Elon Musk '(browser){
        const mainQuery = 'Elon Musk'
        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropdownOpenerSelector ='#lr_button';
        const languageDropdownValueSelector ='.goog-menuitem[value="lang_it"]';
        const lastUpsdateDropdownOpenerSelector ='#as_qdr_button';
        const lastUpdateDropdownValueSelector ='.goog-menuitem[value="m"]';
        const submitButtonSelector ='.jfk-button[type="submit"]';
       // const resultsPageQuerySelector=`#searchform input[name="q"][value="${mainQuery}"]`;
        const resultsPageLanguageSelector ='[aria-label="Search Italian pages"]';
        const resultsPageLastUpdateSelector ='[aria-label="Past month"]';

        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpsdateDropdownOpenerSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is Italian')
            .assert.urlContains('as_qdr=m', 'Params: Time period is lastmonth')

        //    browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
            browser.assert.containsText(resultsPageLanguageSelector, 'UI: Language is set to italian');
            browser.assert.containsText(resultsPageLastUpdateSelector, 'UI: Last update is set to past month');
        browser.saveScreenshot('tests_output/google.png')
    }
}