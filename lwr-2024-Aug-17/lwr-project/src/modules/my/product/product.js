import { LightningElement, api, track } from 'lwc';
	

	export default class Product extends LightningElement {
	    @api productId;
	    @track product;
	    connectedCallback() {
	        this.product = this.getProduct(this.productId);
	    }
	
	    //this method is expected to be at server side
	    getProduct(id) {
	        let productDetails = [
	            {
	                id: 1,
	                name: 'Car',
	                details: 'Car details'
	            },
	            {
	                id: 2,
	                name: 'Bike',
	                details: 'Bike details'
	            },
	            {
	                id: 3,
	                name: 'Bus',
	                details: 'Bus details'
	            },
	            {
	                id: 4,
	                name: 'Truck',
	                details: 'Truck details'
	            }
	        ];
	        return productDetails.find(item => item.id == id);
	    }

	    goBack() {
	        this.dispatchEvent(
	            new CustomEvent('navigate', {
	                bubbles: true,
	                composed: true,
	                detail: { path: '/products/' }
	            })
	        );
	    }

	    get isProductAvailable() {
	        return this.product ? true : false;
	    }
	
}