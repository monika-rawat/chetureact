
import axios from "axios";
import React, {useState, useEffect} from "react";
import { useHistory, useParams} from "react-router-dom";

const Edituser=function() {

  let history = useHistory();
  const { id } = useParams();
//   alert(id);
    const [user, setUser] =useState({
        name : "",
        username : "",
        email : "",
        phone : "",
        website: "",
    });
    const{name, username, email, phone, website} = user;
    const onInputChange = e =>{
      setUser({...user, [e.target.name]: e.target.value});
    };
    

    useEffect(() => {
        loadUser();
    }, []);

   const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:8001/users/${id}`, user);
      history.push("/");
   };

   const loadUser = async () =>{
    const result = await axios.get(`http://localhost:8001/users/${id}`);
    console.log(result, "monika");
    setUser(result.data);
  
   };
  
  
   const Edituser = async()=>{
    return await axios.put(`http://localhost:8001/users/${id}`, user);
    
     }

  return(
    <form className="Adduser" onSubmit={e => onSubmit(e)}>
  <div class="form-group">
    <label for="your name">your name </label>
    <input type="text" class="form-control" name="name" value={name} onChange={e =>onInputChange(e)}/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="user name">user name </label>
    <input type="text" class="form-control" name="username" value={username} onChange={e =>onInputChange(e)}/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="email">email </label>
    <input type="text" class="form-control" value={email} name="email" onChange={e =>onInputChange(e)}/>
  </div>
  <div class="form-group">
    <label for="phone">phone</label>
    <input type="text" class="form-control" name ="phone" value={phone} onChange={e =>onInputChange(e)}/>
  </div>
  <br></br>
  <div class="form-group">
    <label for="website">website</label>
    <input type="text" class="form-control" name="website" value={website}  onChange={e =>onInputChange(e)}/>
  </div>
  <br></br>

  <button class="btn btn-warning">Update User</button>
</form>
  );
   };

export default Edituser;
