class GoogleMapsPage{
    get searchBoxInput() {return $('#searchboxinput')}
    get headlineText() {return $('h1 > span:nth-of-type(1)')}
    get directionsButton() {return $('[jsaction="pane.placeActions.directions"] [class^="iRxY3GoUYUY__button"]')}
    get destinationField() {return $('#sb_ifc52 > input')}

    searchLocation(location) {
        this.searchBoxInput.waitForDisplayed({ timeout: 1000 });
        this.searchBoxInput.setValue(location);
        browser.keys('\uE006'); // ENTER
    }

    getDirections() {
        this.directionsButton.click();
    }

    getDestination() {
        return this.destinationField.getComputedLabel();
    }

    open () {
        return browser.url(`https://www.google.com/maps`)
    }
}

module.exports = new GoogleMapsPage();