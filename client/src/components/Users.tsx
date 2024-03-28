import React from 'react';
import UserAvatar from './UserAvatar';
import { UserType } from '../types/types';
import { GET_USERS } from '../gql-schema/schema';
import {useQuery} from "@apollo/client"
import CreateUser from './CreateUser';

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Error...</h2>
  }

  return(
    <div className="flex flex-wrap items-center pb-16">
      {data?.users?.map((user: UserType) => (
        <div key={user.id} className="lg:w-1/3 w-full p-4 text-center inline">
          <UserAvatar user={user} />
        </div>
      ))}
      <CreateUser/>
    </div>
  )
}

export default Users;
