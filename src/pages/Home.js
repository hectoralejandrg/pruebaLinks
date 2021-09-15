import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserThunk } from "../actions/deleteUserActions";
import { getListThunk } from "../actions/listUserActions";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  useEffect(() => {
    dispatch(getListThunk());
  }, [dispatch]);

  const handleDelete = (id)=>{
    dispatch(deleteUserThunk(id))
  }

  const listUsers = users
    ? users.map((user, index) => {
        return (
          <tr key={index}>
            <td>
              <img src={user.avatar} alt="avatar user" />
            </td>
            <td>{user.email}</td>
            <td>
              {user.first_name} {user.last_name}
            </td>
            <td>
              <Link className="btn btn-info" to={`detail/${user.id}`} data-bs-toggle="tooltip" data-bs-placement="top" title="Detail User"> <i className="fa fa-edit"></i> </Link>
              <button onClick={()=>handleDelete(user.id)} className="btn btn-danger ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete User"> <i className="fa fa-trash"></i> </button>
            </td>
          </tr>
        );
      })
    : null;
  return (
    <div className="card m-5">
      <div className="card-header">
        <Link className="btn btn-primary" to="/form">
          New User
        </Link>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Avatar</th>
              <th scope="col">Email</th>
              <th scope="col">Names</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{listUsers}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
