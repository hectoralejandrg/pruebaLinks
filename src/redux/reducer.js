import { CREATE_TYPES } from "../actions/createUserActions";
import { DELETE_TYPES } from "../actions/deleteUserActions";
import { DETAIL_TYPES } from "../actions/detailUserActions";
import { LIST_TYPES } from "../actions/listUserActions";
import { LOGIN_TYPES } from "../actions/loginActions";
import { UPDATE_TYPES } from "../actions/updateUserActions";

const INITIAL_STATE = {
  token: {},
  users: {},
  user: {},
  isLoading: false,
  success: {},
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_TYPES.postLogin:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_TYPES.postLoginSuccess:
      return {
        ...state,
        isLoading: false,
        token: action.payload,
      };
    case LOGIN_TYPES.postLoginFail:
      return {
        ...state,
        isLoading: false,
      };
    case LIST_TYPES.getList:
      return {
        ...state,
        isLoading: true,
      };
    case LIST_TYPES.getListSuccess:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case LIST_TYPES.getListFail:
      return {
        ...state,
        isLoading: false,
      };
    case CREATE_TYPES.createUser:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_TYPES.createUserSuccess:
      return {
        ...state,
        isLoading: false,
        success: alert(`status: ${JSON.stringify(action.payload)}`),
      };
    case CREATE_TYPES.createUserFail:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
      };
    case DETAIL_TYPES.detailUser:
      return {
        ...state,
        isLoading: true,
      };
    case DETAIL_TYPES.detailUserSuccess:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case DETAIL_TYPES.detailUserFail:
      return {
        ...state,
        isLoading: false,
      };
    case UPDATE_TYPES.updateUser:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_TYPES.updateUserSuccess:
      return {
        ...state,
        isLoading: false,
        success: alert(`status: ${JSON.stringify(action.payload)}`),
      };
    case UPDATE_TYPES.updateUserFail:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
      };
    case DELETE_TYPES.deleteUser:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_TYPES.deleteUserSuccess:
      return {
        ...state,
        isLoading: false,
        success: alert(`status: ${JSON.stringify(action.payload)}`),
      };
    case DELETE_TYPES.deleteUserFail:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
      };
    default:
      return state;
  }
};
