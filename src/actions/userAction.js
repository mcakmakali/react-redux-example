import axios from "axios"


export const getUsers = () => {
    return function (dispatch) {
        try{
            axios.get("http://localhost:3002/user")
                .then((response) => {
                    return (
                        dispatch({
                            type: 'LIST_USER',
                            payload: response.data
                        })
                        )
                       
                    
                })
        }catch(err){
            console.log("Api disconnect")
        }
        
    }
}

export const AddUserPost = (state) => {
   
    return function (dispatch) {
        axios.post("http://localhost:3002/user/", state)
        .then((res) => {
           dispatch({
            type: 'ADD_USER'
           });
        
        }).catch((err) => console.log(err))
    }
   
}