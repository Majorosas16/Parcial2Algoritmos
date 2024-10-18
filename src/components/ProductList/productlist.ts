export enum AttributeList {
    "image" = "image",
    "titleproduct" = "titleproduct",
    "price" = "price",
    "bio" = "bio",
}


class ProductList extends HTMLElement {
    image?: string;
    titleproduct?: string;
    price?: number;
    bio?: string;
;

    static get observedAttributes() {
        return Object.values(AttributeList);
    }
   
    attributeChangedCallback(propName: AttributeList, oldValue: string | undefined, newValue: string | undefined){
        switch (propName) {
            case AttributeList.price:
                this.price = newValue ? Number(newValue) : undefined;
                break;

            default:
                this[propName] = newValue;
                break;
        
    }
}
        
        constructor(){
            super();
            this.attachShadow({mode: "open"})
        }

        connectedCallback(){
           this.render();
        }

        
    
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
            <div class="product">
                <div class="image">
                    <img src="${this.image}" || 'No Image'}">
                </div>
                <div class="information">
                    <div class="details">
                        <h3>${this.titleproduct || 'No Title'}</h3>
                        <p class="price">$${this.price || 'No Price'}</p>
                        <p class="bio">$${this.bio || 'No Price'}</p>
                    </div>
                </div>
            </div>       
                `
            }
        }
    }
customElements.define("productlist-component",ProductList);
export default ProductList;