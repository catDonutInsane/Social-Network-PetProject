import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../../thunk/thunk";
import { useAppSelector,useAppDispatch } from "../../../hooks/hooks"; 

export const UserPageById = () => {
  const dispatch = useAppDispatch();
  let data = useAppSelector((state) => state.reducer.singleUserData);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getUser(Number(id)));
  }, [id, dispatch]);

  return (
    <div>
      <img
        style={{ width: "50px" }}
        src={
          data?.photos?.small
            ? data.photos.small
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        }
        alt="img"
      />
      {data?.fullName}
      <br />
      <span>
        About me:{" "}
        {data?.aboutMe || "Информация о пользователе не заполнена"}
      </span>
    </div>
  );
};
