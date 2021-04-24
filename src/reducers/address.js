import {
    ADDRESS_REQUEST,
    ADDRESS_SUCCESS,
    SAVE_ADDRESS,
    ADDRESS_ERROR,
    UPDATE_ADDRESS,
    LOAD_ADDRESS,
    UPDATING_ADDRESS,
    ADD_ADDRESS,
    REMOVE_ADDRESS,
    PREDETERMINED_ADDRESS
} from '../constants/actions-types';
const initialState = {
    address: [],
    error: null,
    fetching: false
}

const addressReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case ADDRESS_REQUEST:
            return { ...state, fetching: true };
        case ADDRESS_SUCCESS:     
            return { ...state, address: [...action.data], fetching: false };        
        case LOAD_ADDRESS:           
            return {...state, address: state.address.map(address =>                      
                    address.id == action.data.id ?  {...action.data} : address                    
                ), fetching: false}; 
        case ADD_ADDRESS:
            return {...state, address: [...state.address, {...action.data}] }
        case UPDATING_ADDRESS:
            return {...state, fetching: false}
        case SAVE_ADDRESS:
        case UPDATE_ADDRESS:      
            return { ...state, address: action.data, fetching: true };
        case REMOVE_ADDRESS:
            return { ...state, address: state.address.filter(address => address.id !== action.id ) }
        case PREDETERMINED_ADDRESS:    
            return {...state,                 
                address: state.address.map(address => {                        
                    if (address.id == action.data.id){                   
                        address.predetermined = true
                        return address; 
                    }else{ 
                        address.predetermined = false 
                        return address;
                    }
                })
            }
        case ADDRESS_ERROR:            
            return { ...state, error: action.error, fetching: false };
        default:
            return state;
    }
}
export default addressReducer;