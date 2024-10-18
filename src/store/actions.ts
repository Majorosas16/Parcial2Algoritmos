import { Actions } from '../types/store';
import { Screens } from '../types/store';

//

export const screen  = (payload: Screens) => { 
    return  {
        action: Screens.DASHBOARD,
        payload,
    }
}

export const eliminate  = (payload: any) => { 
    return  {
        action: Actions.ELIMINATE,
        payload,
    }
}

export const edit  = (payload: any) => { 
    return  {
        action: Actions.EDIT,
        payload,
    }
}

export const addItem  = (payload: any) => { 
    return  {
        action: Actions.ADDITEM,
        payload,
    }
}

