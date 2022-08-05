import React from "react";
import { users } from "../data/Users.js";
import { UserListItem } from "../UsersListItem/UserListItem";

export const UserList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
};
