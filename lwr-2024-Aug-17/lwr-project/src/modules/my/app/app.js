import { LightningElement, createElement } from 'lwc';
import Navigo from 'navigo';


export default class App extends LightningElement {
    //router initialization
    router = new Navigo(null, true);


    constructor() {
        super();
        this.router
            .on({
                '/': () => {
                    (async () => {
                        const { default: Home } = await import('my/home');
                        this.setPage('my-home', Home);
                    })();
                },
                '/products': () => {
                    (async () => {
                        const { default: Products } = await import(
                            'my/products'
                        );
                        this.setPage('my-products', Products);
                    })();
                },
                '/products/:productId': data=> {
                    (async () => {
                        const { default: Product } = await import(
                            'my/product'
                        );
                        this.setPage('my-product', Product, data);
                    })();
                }
            })
            .resolve();
    }


    //dynamically laoding components
    setPage(tag, component, data = {}) {
        const el = createElement(tag, {
            is: component,
            fallback: false
        });
        Object.assign(el, data);
        let container = this.template.querySelector('.container');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        container.appendChild(el);
    }
    handleNavigation(e) {
        if (e.detail) {
            this.router.navigate(e.detail.path);
        }
    }
    renderedCallback() {
        this.router.updatePageLinks();
    }
}