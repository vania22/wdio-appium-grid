export default class Menu {
    accessibilityIDAttribute = driver.isAndroid ? 'content-desc' : 'accessibility-id'

    get loginButton() {
        return $(`//*[@${this.accessibilityIDAttribute}="Login"]`);
    }

    get homeButton() {
        return $(`//*[@${this.accessibilityIDAttribute}="Home"]`);
    }

    get webviewButton() {
        return $(`//*[@${this.accessibilityIDAttribute}="Webview"]`);
    }

    get swipeButton() {
        return $(`//*[@${this.accessibilityIDAttribute}="Swipe"]`);
    }

    async waitForMenuToAppear() {
        await this.homeButton.waitForDisplayed({timeout: 5000});
    }
}
