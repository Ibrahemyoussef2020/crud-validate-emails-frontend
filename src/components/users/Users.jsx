import React from 'react'
import {useQuery,useMutation} from 'react-query'
import {Box} from '@mui/material'
import { getUsers } from '../../apis/api'
import User from './User'
const Users = ({setRoutation,setValues}) => {
    const {data:users,error,isLoading,isError} = useQuery('users',getUsers)
  return (
      users?.map(({id,name,email,password})=> <React.Fragment key={id}>
      <User Id={id}
        name={name}
        email={email}
        password={password}
        setRoutation={setRoutation}
        setValues={setValues}
      />
    </React.Fragment>)
  )
}

export default Users