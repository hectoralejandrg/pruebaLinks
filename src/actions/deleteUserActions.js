import { apiDeleteUser } from "../api/api";

export const DELETE_TYPES = {
  deleteUser: "deleteUser",
  deleteUserSuccess: "deleteUserSuccess",
  deleteUserFail: "deleteUserFail",
};

export const deleteUser = () => ({
  type: DELETE_TYPES.deleteUser,
});
export const deleteUserSuccess = (payload) => ({
  type: DELETE_TYPES.deleteUserSuccess,
  payload: payload,
});
export const deleteUserFail = (err) => ({
  type: DELETE_TYPES.deleteUserFail,
  payload: err,
});
export const deleteUserThunk = (id) => {
  return (dispatch) =>
    apiDeleteUser(id)
      .then((res) => dispatch(deleteUserSuccess(res.status)))
      .catch((err) => dispatch(deleteUserFail(err.response.status)));
};