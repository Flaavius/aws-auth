export interface IUserData {
  id_token: string;
  access_token: string;
  expires_in: number;
  auth_type: string;
  [key: string]: any;
}


class UserManager {
  userInfo: IUserData = {
    id_token: "",
    access_token: "",
    expires_in: 0,
    auth_type: ""
  };

  setUser = (userInfo: IUserData) => {
    this.userInfo = userInfo;
  };

  getUserInfo = (key?: string): IUserData => {
    if(key) return this.userInfo[key];
    return this.userInfo
  };

  logout = (): void => {
    this.userInfo = {
      id_token: "",
      access_token: "",
      expires_in: 0,
      auth_type: ""
    };
  }

  isLoggedIn = () => Boolean(this.userInfo.access_token);



}

export const userManager = new UserManager();