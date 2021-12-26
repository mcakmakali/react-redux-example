import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../actions/userAction';
const UserList = () => {

  const state = useSelector((state) => ({...state}));
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  const userList = state.userReducers.users ? state.userReducers.users : []; 


  return (
    <div className="card">
        <div className="card-body">
          <h4>Kayıtlı Üye Listesi</h4>
          <div className="list-group">
            {
              userList.map(item => (
                <button
                  type="button"
                  className="list-group-item list-group-item-action"
                >
                    {item.name}
                </button>
              ))
            }
            
            
            
            
          </div>
        </div>
      </div>
  )
}

export default UserList;