import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";
import { useSelector } from "react-redux";

const UserView = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h2>List Of Users</h2>
      {user.loading && <div>Loading......</div>}
      {!user.loading && user.error ? <div>Error :{user.error}</div>: null}
        {!user.loading && user.users.length ? (
            <ul>
                {user.users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        ):null}
    </>
  );
};

export default UserView;
