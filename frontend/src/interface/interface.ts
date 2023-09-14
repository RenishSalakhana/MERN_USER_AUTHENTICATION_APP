//for register user 
export interface IUserFormData {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
  }

  //for login user
export interface LoginProps {
    email: string;
    password?: string | any;
  }

  //for routes info :
export interface RoutesArrays {
    arrUsers: any[];
    loginUserIndex: number;
  }


export interface RouteParams {
    username: string;
  }