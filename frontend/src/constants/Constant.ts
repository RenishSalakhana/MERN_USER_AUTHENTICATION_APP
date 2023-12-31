export const GET_USERS = "GET_USERS";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE"; 

export const USER_PROFILELIST_SUCCESS = "USER_PROFILELIST_SUCCESS"; 
export const USER_PROFILELIST_FAILURE = "USER_PROFILELIST_FAILURE"; 

export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS"; 
export const USER_PROFILE_FAILURE = "USER_PROFILE_FAILURE"; 

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAIL";

//user list columns
  
export const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];