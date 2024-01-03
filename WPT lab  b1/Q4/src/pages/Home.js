import React, { useEffect, useState } from 'react'
import UserService from '../service/UserService';
import TableRow from '../components/TableRow';

function Home() {
  const [usersList,setUserList]= useState([]);
  useEffect(() => {
    const arr=UserService.getallusers();
    setUserList([...arr])
  }, []);
  const deleteUser=(firstName)=>{
     UserService.deleteuser(firstName);
     setUserList(UserService.getallusers())
  }
  return (
    <div>
      <h1 className="text-center mt-5">This is Home Page</h1>
    </div>
  )
}

export default Home