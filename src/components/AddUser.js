// import { Axios } from "axios/lib/axios";
import axios from "axios";
import React ,{useState} from "react";
import { useHistory } from "react-router-dom";



const userUrl = "http://localhost:8001/users";
const AddUser =() =>{

  let history = useHistory();
    const [user, setUser] =useState({
        name : "",
        username : "",
        email : "",
        phone : "",
        website: "",
    });
    const{name, username, email, phone, website} = user;
    const onInputChange = e =>{
      setUser({...user,[e.target.name]: e.target.value})
    };

   const onSubmit = async e => {
      e.preventDefault();
       await axios.post(`${userUrl}/add`, user);
      history.push("/");
   };

 
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
    <input type="text" class="form-control" value={email} name="email"onChange={e =>onInputChange(e)}/>
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

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  )
   };

export default AddUser;







