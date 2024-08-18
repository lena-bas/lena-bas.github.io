import { LightningElement } from 'lwc';


export default class Home extends LightningElement {
    goToProducts() {
        this.dispatchEvent(
            new CustomEvent('navigate', {
                bubbles: true,
                composed: true,
                detail: { path: '/products' }
            })
        );
    }
}