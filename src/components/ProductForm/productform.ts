import { addItem } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/store";
import { Item } from "../../types/item";

//Esta clase es solo el formulario
class productForm extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        addObserver(this)
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <h2>Store</h2>
         <form class="form">
            <input type="text" id="text-input" placeholder="Title" required />
            <input type="text" id="bio-input" placeholder="Description" required />
            <input type="text" id="price-input" placeholder="Price" required />
            <input type="text" id="category-input" placeholder="Category" required />
            <input type="text" id="rating-input" placeholder="Rating" required />
            <input type="image" id="image-input" required />
            <button type="submit" id="add-btn">Añadir</button>
         </form>
        `;

        const formElement = this.shadowRoot?.querySelector('.form') //Con el query selector se trae la referencia del form y la guarda en formElement.

        //Esta parte del código crea la tarea cuando el fromulario hace el submit
        
        formElement?.addEventListener("submit", (e) => {
            e.preventDefault() //paras que al enviarse no se refresque la página.
        
            const inputValue2 = this.shadowRoot?.querySelector("#bio-input") as HTMLInputElement
            const inputValue3 = this.shadowRoot?.querySelector("#price-input") as HTMLInputElement
            const inputValue4 = this.shadowRoot?.querySelector("#category-input") as HTMLInputElement
            const inputValue5 = this.shadowRoot?.querySelector("#rating-input") as HTMLInputElement
            const inputValue6 = this.shadowRoot?.querySelector("#image-input") as HTMLInputElement


            const newItem: Item = {
                id: new Date().getTime(), //Ese id es algo que se crea dependiendo de la fecha horaria. Es un id único
                name: inputValue2.value,
                price: Number(inputValue3.value),
                category: inputValue4.value,
                bio: inputValue5.value,
                image: inputValue6.value
            }

            dispatch(addItem(newItem))            
            
        })
		
		}
	
}

customElements.define('product-form', productForm);
export default productForm;
