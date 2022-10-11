// import logo from './logo.svg';
import { useState } from 'react'
// import './App.css';

function App() {
  const [roll, setroll] = useState('')
  const [password, setpassword] = useState('')
  const [role, setrole] = useState('')


  async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
			method:'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				roll,
				password,
        role,
			}),
		})

		const data = await response.json()

    if(data.user)
    {
      localStorage.setItem('token', data.user)
      alert("Login Successful")
      window.location.href='/student/addQuery'
    }
    else
    {
      alert("Rollnumber Password and Role does not match")
    }
    console.log(data)
  }

  return <div>
    <h1>Login</h1>


    <form onSubmit={loginUser}>
      <input
        value={roll}
        onChange={(e) => setroll(e.target.value)}
        type="text" placeholder="Rollnumber"
      />
      <br></br>
      <br></br>
      <input
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        type="password" placeholder="Password"
      />
      <br></br>
      <br></br>
      <label>Role</label>&nbsp;
      <select id="roles"
        value={role}
        onChange={(e) => setrole(e.target.value)}>
        {/* <option disabled hidden selected>Select Role</option> */}
        <option value="Student">Student</option>
        <option value="TA">TA</option>
      </select>

      <br></br>
      <br></ br>
      <input type="submit" value="Login" />

    </form>
  </div>
}

export default App;
