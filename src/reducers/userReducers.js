const userReducers = (state = {}, action ) => {
    switch (action.type) {
        case 'LIST_USER':
            return { ...state, users: action.payload };

        case 'ADD_USER':
            return { ...state };

        default:
            return state;
    }
  
} 


export default userReducers;