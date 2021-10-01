import React,{useState, useEffect, setData, setState, getUserById} from "react";
import  {Link} from "react-router-dom";
import axios  from "axios";
// const userUrl = "http://localhost:8001/users";

const Home =() =>{
 const [users, setUser] = useState([]);

 useEffect(() => {
  loadUsers();
 }, []);

// <-------get------

 const loadUsers = () => {
  return fetch(`http://localhost:8001/users/`)
  .then((response) => response.json())
  .then((data) => setUser(data));
  }


// <--delete------
 const deleteUser = async id=>{

  await axios.delete(`http://localhost:8001/users/$id`);
  loadUsers();
 };
   
// const [ updateList] = useState(useState);

// const deleteUser = (e) => {
//  const name = e.target.getAttribute("name")
//   updateList(list.filter(item => item.name !== name));
// };

 
 return(
        <div className="container">
        <div className="py-4">
        <h1>HOME PAGE</h1>
        <table className="table">
  <thead className="thead-dark bg">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
  
    </tr>
  </thead>
  <tbody>
        {
            users.map((user, index) =>(
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                   
                    <td>
                        <Link  className="btn btn-primary m-2" to ={`/User/${user.id}`}>view</Link>
                        <Link  className="btn btn-outline-primary m-2" to ={`/Edituser/${user._id}`}>Edit</Link>
                        <Link  className="btn btn-danger" to ={`/`} onClick={() => deleteUser(user._id)}> Delete</Link>
                    </td>
                </tr>
            ))
        }
  </tbody>
</table>
        </div>
        </div>
    );
};

export default Home;