module.exports = {
    url: 'https://www.google.com/advanced_search',
    elements: {
         mainQueryInput: 'input[name="as_q"]',
         languageDropdown : '#lr_button',
         lastUpsdateDropdown : '#as_qdr_button',
         submitButton : '.jfk-button[type="submit"]',
    },
    commands: [{
        setQuery(value){
            return this
                .setValue('@mainQueryInput', value);
            
        },
        selectFilter(selector, value){
            return this
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`);
            
        },
        search(){
            return this
                .click('@submitButton');
                
            
        },
        assertTitle(selector, expectedTitle){
            
            return this
            
                .getText(selector, function(result){
                    firstTitle=result.value;
                    console.log(`First Title: ${firstTitle}`)  
                    browser.assert.strictEqual(firstTitle,expectedTitle, 'Validating the Actual and Expected Value')
                    
                })   

            
        },

            // demoTest(selector, expectedTitle) {
                
            //   const result = browser.element(selector).getText();
            
            //   console.log(result)
            //   result.assert.valueEquals(expectedTitle);
            // //    return this.result
            // },

    }]
}