import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS, USER_PROFILELIST_FAILURE, USER_PROFILELIST_SUCCESS, USER_PROFILE_FAILURE, USER_PROFILE_SUCCESS } from "../../constants/Constant";

  
  const initialState = {
    users: [],
  };
  
  const userReducers = (
    state = initialState,
    action: { type: any; payload: any }
  ) => {
    switch (action.type) {
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          users: [...state.users, action.payload],
        };
  
      case REGISTER_USER_FAILURE:
        return {
          error: action.payload,
        };
  
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          users: action.payload,
          isAuthenticated: true,
        };
      case LOGIN_USER_FAILURE:
        return {
          error: action.payload,
        };
  
      case USER_PROFILELIST_SUCCESS:
        return {
          ...state,
          users: action.payload,
        };
  
      case USER_PROFILELIST_FAILURE:
        return {
          error: action.payload,
        };
  
      case USER_PROFILE_SUCCESS:
        return {
          ...state,
          userProfile: action.payload,
          error: null,
        };
  
      case USER_PROFILE_FAILURE:
        return {
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducers;