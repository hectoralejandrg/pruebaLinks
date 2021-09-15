import { apiListUser } from "../api/api";

export const LIST_TYPES = {
  getList: "getList",
  getListSuccess: "getListSuccess",
  getListFail: "getListFail",
};

export const getList = () => ({
  type: LIST_TYPES.getList,
});
export const getListSuccess = (users) => ({
  type: LIST_TYPES.getListSuccess,
  payload: users,
});
export const getListFail = (err) => ({
  type: LIST_TYPES.getListFail,
  payload: err,
});
export const getListThunk = () => {
  return (dispatch) =>
    apiListUser("users?page=2")
      .then((res) => dispatch(getListSuccess(res.data)))
      .catch((err) => dispatch(getListFail(err)));
};
