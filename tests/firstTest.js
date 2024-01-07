module.exports ={
    'My first Test Case'(browser){
        browser
            .url('https://news.ycombinator.com/')
            .waitForElementVisible('.hnname')
            .assert.textContains('.hnname', 'Hacker News');
    }
}