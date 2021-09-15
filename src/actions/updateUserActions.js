import { apiPutUser } from "../api/api";

export const UPDATE_TYPES = {
  updateUser: "updateUser",
  updateUserSuccess: "updateUserSuccess",
  updateUserFail: "updateUserFail",
};

export const updateUser = () => ({
  type: UPDATE_TYPES.updateUser,
});
export const updateUserSuccess = (payload) => ({
  type: UPDATE_TYPES.updateUserSuccess,
  payload: payload,
});
export const updateUserFail = (err) => ({
  type: UPDATE_TYPES.updateUserFail,
  payload: err,
});
export const updateUserThunk = (id, values) => {
  return (dispatch) =>
    apiPutUser(id, values)
      .then((res) => dispatch(updateUserSuccess(res.status)))
      .catch((err) => dispatch(updateUserFail(err.response.status)));
};
