import { addObserver, appState } from "../store/store";
import { addItem } from "../store/actions";
import ProductItem, { Atributte } from '../components/ProductItem/productitem';
import ProductList , { AttributeList } from "../components/ProductList/productlist";

//Import API
import { getProducts } from "../services/getProducts";

class Dashboard extends HTMLElement {

    products: ProductItem[] = [];
    shoppingCart: ProductList[] = [];
	dataProducts: any[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this)
		
	}

	async connectedCallback() {
		this.dataProducts = await getProducts();
		this.createCardsProduct();
		this.createCardsListItem();
		this.render();
	}

	createCardsProduct ()  {
		this.dataProducts.forEach(productData => {
			const product = this.ownerDocument.createElement('product-item') as ProductItem;
			product.setAttribute(Atributte.image, productData.image);
			product.setAttribute(Atributte.name, productData.title);
			product.setAttribute(Atributte.bio, productData.description);
			product.setAttribute(Atributte.category, productData.category);
			product.setAttribute(Atributte.price, productData.price);
			product.setAttribute(Atributte.rating, productData.rating.rate); 
			
			this.products.push(product);
		 
			});
		}

		createCardsListItem ()  {
            appState.itemsList.forEach((element: any) => {
                const product = this.ownerDocument.createElement('productlist-component') as ProductList; 
                product.setAttribute(AttributeList.image, element.image);
                product.setAttribute(AttributeList.titleproduct, element.title);
                product.setAttribute(AttributeList.price, element.price);
                
                this.shoppingCart.push(product);
        
            });
        }

	render() {
		if (this.shadowRoot){
			this.shadowRoot.innerHTML = `
		   <h1>Store Products</h1>
		   <hr>
		   <div class="container-products"></div>
		   
		   <h1>Added to cart</h1>
		   <hr>
		   <div class="container-shopping"></div>
		   `;
	
		   const container = this.shadowRoot?.querySelector('.container-products');
		   this.products.forEach((product) => {
			   container?.appendChild(product);
		   });
	
		   const containerShoppingCartItem = this.shadowRoot?.querySelector('.container-shopping');
		   this.shoppingCart.forEach((productShopping) => {
			   containerShoppingCartItem?.appendChild(productShopping);
		   });

		}
	}
}

customElements.define('app-dashboard', Dashboard);