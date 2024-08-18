import React, { useEffect } from "react";
import { fetchUsers } from "../redux/user/userAction";
import { useDispatch, useSelector } from "react-redux";

const UserLists = () => {
  const dispatch = useDispatch();
  const { users, error, loading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderUser = () => {
    return (
      users &&
      users.length &&
      users.map((user) => <li key={user.id}>{user.name}</li>)
    );
  };
  return (
    <div>
      {loading ? <p>loading ...</p> : error ? <p>{error}</p> : renderUser()}
    </div>
  );
};

export default UserLists;
