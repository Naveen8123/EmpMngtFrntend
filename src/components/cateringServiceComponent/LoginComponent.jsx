import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginComponent = ({setIsLogged}) => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    // const [isLogged, setIsLogged] = useState(false)

    const name = "naveensp8123"
    const pass = "8123908660"
    
      const navigator = useNavigate();
    
    
    
      const submitFormData = (e) => {
          e.preventDefault();
      
      
            const loginDetails = { userName, password}
            console.log(loginDetails);
            if(userName === name && password === pass){
                setIsLogged(true)
                  // navigator('/dashboard')
                  navigator("/pagination")
            }else {
                window.alert("invalid username and password, enter correct credentials");
                navigator('/login')
                setUserName('')
                setPassword('')
            }
            
          }
    
      return (
        <div className="container">
          <h2 className="text-center">Login</h2>
          <form onSubmit={submitFormData} className='form-group'>
            <div className="mb-3">
              <label htmlFor="custName" className="form-label">User Name</label>
              <input
                type="text"
                placeholder='enter user name'
                name='userName'
                value={userName}
                // className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobileNum" className="form-label">password</label>
              <input
                type="password"
                placeholder="Enter password"
                id="password"
                name="password"
                value={password}
                // className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      );
    
}
export default LoginComponent