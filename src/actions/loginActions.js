import { apiPostLogin } from "../api/api";


export const LOGIN_TYPES = {
  postLogin: "postLogin",
  postLoginSuccess: "postLoginSuccess",
  postLoginFail: "postLoginFail",
};

export const postLogin = () => ({
  type: LOGIN_TYPES.postLogin,
});
export const postLoginSuccess = (user) => ({
  type: LOGIN_TYPES.postLoginSuccess,
  payload: user,
});
export const postLoginFail = (err) => ({
  type: LOGIN_TYPES.postLoginFail,
  payload: err,
});
export const postLoginThunk = (values, onLogin) => {
  return (dispatch) =>
    apiPostLogin("login", values)
      .then((res) => dispatch(postLoginSuccess(res.data)))
      .then(onLogin)
      .catch((err) => dispatch(postLoginFail(err)));
};
