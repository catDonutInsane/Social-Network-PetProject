import { userAPI } from "../api/api";
import { login, setAuth, setSingleUserData } from "../slices/slice";
import { AppDispatch } from "../store/store";

export const getUser = (id:number) => (dispatch:AppDispatch) => {
  userAPI.getUserByID(id).then((res) => {
    console.log(res.data)
    dispatch(setSingleUserData(res.data));
  });
};

export const getMyProfileData = () => (dispatch:AppDispatch) => {
  userAPI.authMe().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setAuth(true));
      dispatch(login(res.data.data));
    }
  });
};

export const logOutThunk = () => (dispatch:AppDispatch) => {
  userAPI.logOut().then((res) => dispatch(setAuth(false)));
};
export const checkAuth = () => (dispatch:AppDispatch) => {
  userAPI.authMe().then((res) => {
    dispatch(login(res.data.data));
    if (res.data.resultCode === 0) {
      dispatch(setAuth(true));
    }
  });
};
export const logInThunk = (email:string, pass:string, rememberMe:boolean) => (dispatch:AppDispatch) => {
  userAPI.logIn(email, pass, rememberMe).then(() => dispatch(checkAuth()));
};
