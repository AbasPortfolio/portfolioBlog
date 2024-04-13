import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import axios from 'axios'


const Login = () => {
  const {setCurrentUser} = useContext(UserContext)
  const [error,setError] = useState('')
  const [userData,setUserData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const changeInputHandler = (e) =>{
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }
  const loginUser = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const response = await axios.post("http://localhost:6000/api/users/login", userData);
      const user = await response.data
      setCurrentUser(user);
      navigate('/');
    } catch (error) {
      setError(error.response.data.message)
    }};
  return (
    <section>
    <form onSubmit={loginUser}>
        <div>
            <input type="email" placeholder='Email' name='email'value={userData.email} onChange={changeInputHandler}  />
        </div>
        <div>
            <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />
        </div>
        <button>Login</button>
    </form>
</section>
  )
}

export default Login