import { UserProfileInfo } from "../UserProfileInfo/UserProfileInfo";
import { Pagination } from "antd";
import { userAPI } from "../../api/api";
import { useCallback, useEffect, useState } from "react";
export const AllUsersPage = () => {
  const [partOfList, setPartOfList] = useState([]);
  const [totalItems, setTI] = useState(0);

  const showPartOfUsers = useCallback(
    (current:number, pageSize:number) => {
      userAPI.getUsers(current,pageSize)
        .then((res) => {
          if (totalItems === 0) setTI(res.data.totalCount);
          setPartOfList(res.data.items);
        })
        .catch((err) => console.log(err.message));
    },
    [totalItems]
  );
  useEffect(() => {
    showPartOfUsers(1,10);
  }, [showPartOfUsers]);
  return (
    <div>
      <div>
        {totalItems === 0 ? (
          "There are not any users"
        ) : (
          <div>
            {partOfList.map((i) => (
              <UserProfileInfo data={i} />
            ))}
          </div>
        )}
      </div>

      <Pagination
        defaultCurrent={1}
        total={totalItems}
        onChange={(current, pageSize) => {
          if (current === 0) current = 1;
          showPartOfUsers(current, pageSize);
        }}
      />
    </div>
  );
};
