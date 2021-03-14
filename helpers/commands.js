module.exports = {

get agreeButton() {return $('#introAgreeButton')},

    acceptUserConsent: function () {
        const googleIframe = browser.$('iframe[class="widget-consent-frame"]');
        
        browser.switchToFrame(googleIframe);
        this.agreeButton.click();
    }
};