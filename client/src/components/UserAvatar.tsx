import React from "react";
import Gravatar from "react-gravatar"
import { UserType } from "../types/types";

type UserAvatarProps = {
  user: UserType
}

const UserAvatar = ({user}:UserAvatarProps) => (
  <React.Fragment>
    <Gravatar email={user.email} size={100} className="rounded-full text-center inline" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{user.name}</div>
      <p className="text-gray-500 text-sm">{user.email}</p>
      <p className="text-gray-500 text-base">{user.postsCount}</p>
    </div>
  </React.Fragment>
)

export default UserAvatar;
