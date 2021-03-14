// Page Objects
const GoogleMapsPage = require('../pageobjects/google.maps.page');
// Helpers
const acceptUserConsent = require('../../helpers/commands');

describe('Given a user on google maps page', () => {
    before(() => {
        GoogleMapsPage.open();
        acceptUserConsent.acceptUserConsent();
    });

    describe('When the user search Dublin on Google Maps', () => {
        before(() => {
            GoogleMapsPage.searchLocation('Dublin');
        });
        
            it('The user should see Dublin as headline text on left panel', () => {
                expect(GoogleMapsPage.headlineText).toHaveText('Dublin');
            })

        })
})