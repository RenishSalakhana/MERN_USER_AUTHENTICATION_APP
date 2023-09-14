import axios from "axios";
import { API_URL } from "../../config/api";
import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS, USER_PROFILELIST_FAILURE, USER_PROFILELIST_SUCCESS, USER_PROFILE_FAILURE, USER_PROFILE_SUCCESS } from "../../constants/Constant";


export const registerUser =
  (userFormData: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userFormData);
      if (response.data && response.data.success) {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: userFormData });
      } else {
        dispatch({ type: REGISTER_USER_FAILURE, payload: userFormData });
      }
    } catch (error) {
      throw error;
    }
  };

export const loginUser =
  (userFormData: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const response = await axios.post(`${API_URL}`, userFormData);

      if (response.data && response.data.user) {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: userFormData });
      } else {
        dispatch({ type: LOGIN_USER_FAILURE, payload: response.data.error });
      }
    } catch (error) {
      throw error;
    }
  };

export const userListAction =
  () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const response = await axios.get(`${API_URL}/list`);

      if (response.data && response.data.user) {
        dispatch({ type: USER_PROFILELIST_SUCCESS, payload: response.data.user });
      } else {
        dispatch({ type: USER_PROFILELIST_FAILURE, payload: response.data.error });
      }
    } catch (error) {
      throw error;
    }
  };

export const userProfileAction =
  (loggedUserEmail: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const response = await axios.get(
        `${API_URL}/profile?email=${loggedUserEmail}`
      );

      if (response.data && response.data.user) {
        dispatch({ type: USER_PROFILE_SUCCESS, payload: response.data.user });
      } else {
        dispatch({ type: USER_PROFILE_FAILURE, payload: response.data.error });
      }
    } catch (error) {
      throw error;
    }
  };