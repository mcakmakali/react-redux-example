import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom"
import { UserProfileDetail } from "../actions/userAction";


const UserProfile = () => {
    const state = useSelector((state) => ({...state}));
    let dispatch = useDispatch();
    let { id } = useParams();
    
    useEffect(() => {
        dispatch(UserProfileDetail(id))
      }, []);

    const user = state.userReducers.user;


    return (
        <div className="card">
            <div className="card-body">
                <h4>Hoşgeldin { user.name}</h4>
            </div>
        </div>
    )
}


export default UserProfile;