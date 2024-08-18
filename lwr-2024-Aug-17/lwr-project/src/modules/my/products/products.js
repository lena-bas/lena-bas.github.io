import { LightningElement } from 'lwc';
export default class Products extends LightningElement {
    productList = [];
    connectedCallback() {
        this.productList = [
            {
                id: 1,
                name: 'Car'
            },
            {
                id: 2,
                name: 'Bike'
            },
            {
                id: 3,
                name: 'Bus'
            },
            {
                id: 4,
                name: 'Truck'
            }
        ];
    }
    viewDetails(e) {
        //next line gets product id from html data attribute
        let productId = e.target.dataset.productId;
        this.dispatchEvent(
            new CustomEvent('navigate', {
                bubbles: true,
                composed: true,
                detail: { path: '/products/' + productId }
            })
        );
    }
    goBack() {
        this.dispatchEvent(
            new CustomEvent('navigate', {
                bubbles: true,
                composed: true,
                detail: { path: '/' }
            })
        );
    }
}