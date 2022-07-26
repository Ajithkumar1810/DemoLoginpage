import React,{useState} from 'react';
import './index.css';
import Loginform  from './components/Loginform';

function App() {
  const adminUser={
    name:"admin",
    email :"admin@admin.com",
    password :"admin123"
  }
  const [user,setUser]=useState({name:"",email:"",password:""});
  const [error,setError]=useState("");
  const Login=details=>{
    console.log(details);
    if(details.email===adminUser.email &&details.password===adminUser.password && details.name===adminUser.name)
    {
      // console.log("Login sucessfull")
      setUser({name:details.name,email:details.email,password:details.password})
    }
    else if(details.name!==adminUser.name){
      setError("Name Does not Match")
    }
    else if(details.email!==adminUser.email){
      setError("Email Does not Match")
    }
    else {
      setError("Password Does not Match")
    }
    
   
  }
  const Logout=()=>{
    // console.log("Logout");
    setUser({name:"",email:"",password:""})
    setError("")
  }

  return (
    <div className="App">
     {(user.email!=="")? (
      <div className="welcome">
        <h2>Welcome,<span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
      </div>
     ):(
      <Loginform Login={Login} error={error}/>
     )}
    </div>
  );
}

export default App;
