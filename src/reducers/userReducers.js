const userReducers = (state = {}, action ) => {
    switch (action.type) {
        case 'LIST_USER':
            return { ...state, users: action.payload };

        case 'ADD_USER':
            return { ...state };

        case 'USER_PROFILE':
           
            return { ...state, user: action.payload }

        default:
            return state;
    }
  
} 


export default userReducers;