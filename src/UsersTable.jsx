import { useEffect } from "react";
import { useState } from "react";
import SortUsers from "./SortUsers";
 
export default function UsersTable() {
  const [userList, setUserList] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
 
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('/users');
      const data = await response.json();
      const sortedUsers = data.users.sort((a, b) => a.name.localeCompare(b.name));
      setUserList(sortedUsers);
    };
  
    fetchUserData();
  }, []);
 
  console.log(userList);
  const sortUserList = () => {
    const sortedUserList = [...userList].sort((a, b) => {
      return !isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });
 
    setUserList(sortedUserList);
    setIsAscending(!isAscending);
  };
 
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
            <td>registration_date</td>
            <td>status</td>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => ( 
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.registration_date}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <SortUsers onSort={sortUserList} />
    </>
  );
};
