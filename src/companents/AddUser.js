import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { AddUserPost, getUsers} from "../actions/userAction";

 const AddUser = () => {
  
  let dispatch = useDispatch();
  const [state, setState] = useState({
    name: ''
  }) 

  const [error, setError] = useState("");

  const { name } = state;

  const handleInputChange = (e) => {
      let {name, value} = e.target;
      setState({...state, [name]: value});
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!name){
        setError("Please input all input field");
    }else{
      dispatch(AddUserPost(state));
      dispatch(getUsers());
      setError("");
      setState({
        name : ""
      })
    }

  }

  return (
    <div className="card">
      <div className="card-body">
        <h4>Yeni Üye Ekle</h4>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Adınızı soyadınızı giriniz"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="E-mail adresinizi giriniz"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="city"
              value=""
              className="form-control"
              placeholder="Yaşadığınız Şehir"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;