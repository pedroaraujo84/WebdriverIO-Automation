const GoogleMapsPage = require('../pageobjects/google.maps.page');
const userConsent = require('../../helpers/user.consent');

const location = 'Dublin'

describe('Given a user on google maps page', () => {
    before(() => {
        GoogleMapsPage.open();
        userConsent.acceptUserConsent();
    });

    describe('When the user search Dublin on Google Maps', () => {
        before(() => {
            GoogleMapsPage.searchLocation(location);
        });
        
            it('The user should see Dublin as headline text on left panel', () => {
                expect(GoogleMapsPage.headlineText).toHaveText(location);
            })

        describe('When the user click on direction button', () => {

            it('The user should see Dublin on destination field', () => {                
                GoogleMapsPage.getDirections();
                expect(GoogleMapsPage.getDestination()).toContain(location);
            })

        })

    })
})