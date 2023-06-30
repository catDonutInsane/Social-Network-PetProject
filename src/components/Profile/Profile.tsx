import { useEffect } from "react";
import { useAppDispatch,useAppSelector } from "../../hooks/hooks"; 
import { setUserData } from "../../slices/slice";
import { userAPI } from "../../api/api";
import { getMyProfileData } from "../../thunk/thunk";
export const Profile = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.reducer.isAuth);
  const id = useAppSelector((state) => state.reducer.id);
  const UD = useAppSelector((state) => state.reducer.userData);
  useEffect(() => {
      dispatch(getMyProfileData())
    if (isAuth) {
      userAPI.getUserByID(id).then((res) => dispatch(setUserData(res.data)));
    }
    
  }, [id, isAuth, dispatch]);
  return (
    <>
      {isAuth ? (
        <div>
          This is {UD.fullName}'s page
          <div>
            <img src={UD?.photos?.small} alt="img" />
          </div>
        </div>
      ) : (
        "Вы не залогинены"
      )}
    </>
  );
};
