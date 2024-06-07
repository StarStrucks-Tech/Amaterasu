import { ADD_TO_CART, Remove_From_Cart, SET_USER_DATA } from "./constants";
const initialstate=[];
export const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return [
                ...state,
                action.data

            ]
            case Remove_From_Cart:
                let result=state.filter(item=>{
                    return item.name!=action.data
                })
                return [...result ] 
                case SET_USER_DATA:
                    return[
                        ...state,
                        action.data
                    ]
            default:
                return state
    }

}