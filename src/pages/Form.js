import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUserThunk } from "../actions/createUserActions";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    await dispatch(createUserThunk(values));
  };
  return (
    <div className="card w-25 m-3">
      <div className="card-header">
        Create New User
      </div>
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
  );
};

export default Form;
