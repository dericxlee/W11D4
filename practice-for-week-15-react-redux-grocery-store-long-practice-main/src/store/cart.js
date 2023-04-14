const ADD_ITEM = 'cart/ADD_ITEM'


export const addItem = (itemId) => {
    return {
        type: ADD_ITEM,
        itemId: itemId
    }
}


export default function cartReducer(state = {}, action){
    switch (action.type){
        case ADD_ITEM:
            const newState = {}
            newState[action.itemId] = action.itemId
            // newState[produce.id] = addItem(itemId)
            return newState;
        default:
            return state;
    }


}

