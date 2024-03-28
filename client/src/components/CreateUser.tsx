import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER, GET_USERS } from '../gql-schema/schema';

const CreateUser: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createUser] = useMutation(CREATE_USER, {
    variables: {name, email},
    refetchQueries: [
      GET_USERS,
      "GetUsers"
    ]
  })

  const onSubmit = (e:any) => {
    e.preventDefault();
   createUser() 
    setName('');
    setEmail('');
  }

  return (
    <div className="lg:fixed bottom-0 left-0 w-full bg-white border-t border-gray-300">
      <form className="lg:px-8 pt-2 pb-2" onSubmit={e => onSubmit(e)}>
        <div className="lg:flex flex-wrap flex-between items-center justify-center lg:p-0 p-6">
           <h4 className="font-bold lg:pr-4">Create new user</h4>
           <div className="lg:pr-4">
             <input 
               className="border rounded w-full py-2 px-3"
               type="text"
               value={name}
               placeholder="Name"
               onChange={e => setName(e.target.value)} />
           </div>
           <div className="lg:pr-4">
             <input 
               className="border rounded w-full py-2 px-3"
               type="text"
               value={email}
               placeholder="Email"
               onChange={e => setEmail(e.target.value)} />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
               Create User
            </button>
          </div>
        </form>
      </div>
  );
}

export default CreateUser;
