import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { detailUserThunk } from "../actions/detailUserActions";
import { updateUserThunk } from "../actions/updateUserActions";

const Detail = () => {
  const { register, handleSubmit } = useForm();
  let { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  useEffect(() => {
    dispatch(detailUserThunk(id));
  }, [dispatch, id]);

  const onSubmit = (values) => {
    dispatch(updateUserThunk(id, values));
  };
  return (
    <div className="row m-5">
      <div className="col-4">
        <div className="card">
          <img src={user?.avatar} className="card-img-top" alt="avatar user" />
          <div className="card-body">
            <h5 className="card-title">
              {user?.first_name} {user?.last_name}
            </h5>
            <p className="card-text">{user?.email}</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card ms-3">
          <div className="card-header">Update User</div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="job" className="form-label">
                  Job
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="job"
                  {...register("job", { required: true })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
