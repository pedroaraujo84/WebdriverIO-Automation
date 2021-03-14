class GoogleMapsPage{
    get searchBoxInput() {return $('#searchboxinput')}
    get headlineText() {return $('h1 > span:nth-of-type(1)')}

    searchLocation(location) {
        this.searchBoxInput.waitForDisplayed({ timeout: 1000 });
        this.searchBoxInput.setValue(location);
        browser.keys('\uE006'); // ENTER
    }

    open () {
        return browser.url(`https://www.google.com/maps`)
    }
}

module.exports = new GoogleMapsPage();