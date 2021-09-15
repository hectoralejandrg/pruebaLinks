import { apiGetUser } from "../api/api";

export const DETAIL_TYPES = {
  detailUser: "detailUser",
  detailUserSuccess: "detailUserSuccess",
  detailUserFail: "detailUserFail",
};

export const detailUser = () => ({
  type: DETAIL_TYPES.detailUser,
});
export const detailUserSuccess = (user) => ({
  type: DETAIL_TYPES.detailUserSuccess,
  payload: user,
});
export const detailUserFail = (err) => ({
  type: DETAIL_TYPES.detailUserFail,
  payload: err,
});
export const detailUserThunk = (id) => {
  return (dispatch) =>
    apiGetUser(id)
      .then((res) => dispatch(detailUserSuccess(res.data)))
      .catch((err) => dispatch(detailUserFail(err.response.status)));
};