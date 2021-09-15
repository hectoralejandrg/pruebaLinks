import { apiPostUser } from "../api/api";

export const CREATE_TYPES = {
  createUser: "createUser",
  createUserSuccess: "createUserSuccess",
  createUserFail: "createUserFail",
};

export const createUser = () => ({
  type: CREATE_TYPES.createUser,
});
export const createUserSuccess = (payload) => ({
  type: CREATE_TYPES.createUserSuccess,
  payload: payload,
});
export const createUserFail = (err) => ({
  type: CREATE_TYPES.createUserFail,
  payload: err,
});
export const createUserThunk = (values) => {
  return (dispatch) =>
    apiPostUser(values)
      .then((res) => dispatch(createUserSuccess(res.status)))
      .catch((err) => dispatch(createUserFail(err.response.status)));
};