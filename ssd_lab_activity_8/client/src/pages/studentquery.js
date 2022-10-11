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
  const [exam, setexam] = useState('')
  const [course, setcourse] = useState('')
  const [ta, setta] = useState('')
  const [question, setquestion] = useState('')
  const [comment, setcomment] = useState('')



  async function studentquery(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/student/addQuery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        exam,
        course,
        question,
        ta,
        comment,
        
      }),
    })

    const data = await response.json()
    if (data.status === 'ok') {
			// history.push('/login')
      navigate('/student/addQuery');
		}
    else
    {
      alert("Fill required fields")
    }
  }

  return <div>
    <h1>Add new Query</h1>


    <form onSubmit={studentquery}>
      <input
        value={exam}
        onChange={(e) => setexam(e.target.value)}
        type="text" placeholder="Exam Name"
      />
      <br></br>
      <br></br>
      <input
        value={course}
        onChange={(e) => setcourse(e.target.value)}
        type="text" placeholder="Course Name"
      />
      <br></br>
      <br></br>
      <input
        value={question}
        onChange={(e) => setquestion(e.target.value)}
        type="text" placeholder="Question number"
      />
      <br></br>
      <br></br>

      <label>TA</label>&nbsp;
      <select id="ta"
        value={ta}
        onChange={(e) => setta(e.target.value)}>
        {/* <option disabled hidden selected>Select Role</option> */}
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>

      <br></br>
      <br></ br>

      <input
        value={comment}
        onChange={(e) => setcomment(e.target.value)}
        type="text" placeholder="Comments/Concern"
      />
      <br></br>
      <br></br>
      
      <input type="submit" value="Add new Query" />

    </form>

    <br>
    </br>
    <br>
    </br>
    {/* <a href="/login">Click here to login if already registered</a> */}
  </div>
}


// console.log("YO");
export default App;
// App();

// console.log("aasjdhasjdasd");
