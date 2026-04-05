import { useLoaderData } from "react-router"
import React from "react"
const Users = () => {
  const UsersData =  useLoaderData()
  console.log(UsersData)
  return (
    <div>
      <h1>Users</h1>
      {
        UsersData.map(Data => <p>{Data.name}</p>)
      }
    </div>
  )
}

export default Users