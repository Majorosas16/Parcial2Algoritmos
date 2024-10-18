import { Item } from '../types/item';
import { Actions } from '../types/store';
import { Screens } from '../types/store';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		
		case Screens.DASHBOARD:
			return{
				...currentState,
				screen: payload,
			}

			case Actions.ELIMINATE:
				return{
				...currentState,
				itemsList: currentState.itemsList.filter((itemsList: Item) => itemsList.id !== payload), //compara el id que le llegó de actions con la tarea que ya está en el appState 
				}

		case Actions.EDIT:
			return{
				...currentState,
				itemsList: payload,
			}
		
			case Actions.ADDITEM:
			return {
				...currentState, // el estado actual
				itemsList: [...currentState.itemsList, payload], //no se sobreescribe la variable si no que se agrega (es como un push)
			};

		default:
			return currentState;
	}
};
