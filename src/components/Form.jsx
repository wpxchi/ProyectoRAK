import { useState } from "react";
import Validation from './Validation';
const Form =({login})=>{

    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors]=useState({})
    
     const handleChange=(event)=>{
        setErrors(Validation({...userData,  [event.target.name]: event.target.value }))
        setUserData({
            ...userData, [event.target.name]: event.target.value
        })
     }

     const handleSubmit = (event)=> {
event.preventDefault();
login(userData);

     }
    return (
<div> 
<form>

    
<label htmlFor="email">Email:</label>
<input onChange={handleChange} type="text"  name='email' value={userData.email}/>
{errors.e1? <p>{errors.e1}</p>
: errors.e2 ?<p>{errors.e2}</p>
: <p>{errors.e3}</p>  }

    
<label htmlFor="password">Password:</label>
<input onChange={handleChange} type="password"  name='password' value={userData.password}/>
    {errors.p1? (<p>{errors.p1}</p>)
    : (<p>{errors.p2}</p>)
    }

    <button type="submit" onClick={handleSubmit}>Submit</button>

</form>

</div> )
};

 export default Form;