// import logo from './logo.svg';
import { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import './App.css';

function App() {
  // const App = () => {
  // console.log("HEREHEEE");
  // const history = useHistory()
  const navigate = useNavigate();
  const [roll, setroll] = useState('')
  const [password, setpassword] = useState('')
  const [role, setrole] = useState('')


  async function registerUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
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
    if (data.status === 'ok') {
			// history.push('/login')
      navigate('/login');
		}
    else
    {
      alert("Fill required fields or Roll password role already present")
    }
  }

  return <div>
    <h1>Register</h1>


    <form onSubmit={registerUser}>
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
      <input type="submit" value="Register" />

    </form>

    <br>
    </br>
    <br>
    </br>
    <a href="/login">Click here to login if already registered</a>
  </div>
}


// console.log("YO");
export default App;
// App();

// console.log("aasjdhasjdasd");
