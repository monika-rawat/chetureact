import React,{useState, useEffect, setData, setState} from "react";
import  {Link} from "react-router-dom";
import axios  from "axios";
// const userUrl = "http://localhost:8001/users";

const Home =() =>{
 const [users, setUser] = useState([]);

 useEffect(() => {
  loadUsers();
 }, []);

 const loadUsers = () => {
  return fetch(`http://localhost:8001/users`)
  .then((response) => response.json())
  .then((data) => setUser(data));
      
}

  // Simple POST request with a JSON body using fetch
  // const loadUsers = () => {
  //   return fetch(`http://localhost:8001/users`)
  //   .then((response) => response.json())
  //   .then((json) => setUser(json)); 
  //   // console.log(res);
  
  //   }
            
   
      // setUser(result.reverse());
    


//  const loadUsers = async() =>{
//   const result = await fetch("http://localhost:8001/users").then(res=>res.json())

//   .then(json=>{

//     // setUser(json)

//     console.log(json)})

//   .catch((e)=>{

//     console.log("erroe = " +e);

//    })
// // console.log(result);
//   // setUser(result.reverse());
// };
 
//  const getUsers = async() => 
 const deleteUser = async id=>{

  await axios.delete(`http://localhost:3003/users/${id}`);
  loadUsers();
 };
   
 
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
                        <Link  className="btn btn-outline-primary m-2" to ={`/Edituser/${user.id}`}>Edit</Link>
                        <Link  className="btn btn-danger" to ={`/`} onClick={() => deleteUser(user.id)}> Delete</Link>
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