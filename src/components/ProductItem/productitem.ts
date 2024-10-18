import { eliminate } from "../../store/actions";
import { addObserver, dispatch } from "../../store/store";

export enum Atributte {
    'uid' = 'uid',
	'name' = 'name',
	'price' = 'price',
	'category' = 'category',
    'bio' = 'bio',
	'image' = 'image',
	'rating' = 'rating',
}

class ProductItem extends HTMLElement {
	uid?: number;
    name?: string;
	price?: number;
	category?: string;
    bio?: string;
	image?: string;
	rating?: string;
	// stock?: boolean;


	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this) //observador

	}

	static get observedAttributes() {
		return Object.values(Atributte);
	}

	connectedCallback() {
		this.render();

	}

	attributeChangedCallback(propName: Atributte, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {

            case Atributte.uid:
				this.uid = newValue ? Number(newValue) : undefined;
				break;

			case Atributte.price:
				this.price = newValue ? Number(newValue) : undefined;
				break;

			// case Atributte.stock:
			// 	this.stock = newValue ? newValue === 'true' : undefined;
			// 	break;

			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = `
			<div class="divItem">
            <div class="img">
            <img src="${this.image}" alt="${this.name}">
            </div>
				<h3>${this.name}</h3>
                <p>${this.price}</p>
                <p>${this.category}</p>
                <p>${this.bio}</p>
				<p>${this.rating}</p>
				<button class="delete">Eliminar</button>
                <button class="edit">Editar</button>
			</div>
		`;

		const deleteButton = this.shadowRoot?.querySelector('.delete')//Traigo la referencia del boton eliminar

        const editButton = this.shadowRoot?.querySelector('.edit')//Traigo la referencia del boton eliminar

		deleteButton?.addEventListener('click', () => {
			console.log("click", this.uid);
			dispatch(eliminate(this.uid!)) //Como la tarea esta identificada con un id entonves gracias a la acción se remueve toda la tarea
		})

		editButton?.addEventListener('click', () => {
			console.log("click", this.uid);
			dispatch(eliminate(this.uid!)) //Como la tarea esta identificada con un id entonves gracias a la acción se remueve toda la tarea
		})

	}

	// El signo de admiración (!) en TypeScript se usa para indicar que el desarrollador está seguro de que una variable no es null ni undefined en ese punto del código

}

customElements.define('product-item', ProductItem);
export default ProductItem;
