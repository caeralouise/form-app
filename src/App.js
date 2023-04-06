import React, {useState} from 'react';
import './App.css';
import Button from './Button.js';
import Details from './Detail';

function App() {
  // declares input variables
  const[show,setShow]=useState(false);
  const[formShow, setFormShow] = useState(true);
  const[fname, setFName]=useState("");
  const[lname, setLName]=useState("");
  const[email, setEmail]=useState("");
  const[tel, setTel]=useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");
  // function for when submit button is pressed
  function handleData(e)
  {
    e.preventDefault()
    setShow(true)
    setFormShow(false)
  }
  // function for when change information button is pressed
  function back(e)
  {
    e.preventDefault()
    setShow(false)
    setFormShow(true)
  }
  return (
      <header className="App"> 
        <div>
        {formShow?
         <div>
          <h2> Application Form</h2>
          <div className="input-info">
              <form onSubmit={handleData}>
              <label>First Name: </label><input type="text" placeholder="Bob"  onChange={(e)=>setFName(e.target.value)} /><br/>
              <label>Last Name: </label><input type="text" placeholder="Bobbington" onChange={(e)=>setLName(e.target.value)}/><br/>
              <label>Email: </label><input type="email" placeholder="bob@bobbington.co.uk" onChange={(e)=>setEmail(e.target.value)}/><br/>
              <label>Tel: </label><input type="tel" placeholder="0123456789" onChange={(e)=>setTel(e.target.value)}/><br/>
              <label>Password</label><input type="password" placeholder='**********' onChange={(e)=>setPassword(e.target.value)}/><br/>
              <label>Confirm Password</label><input type="password" placeholder='**********' onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </form>
          </div>
          <button className="button" type="submit" onClick={handleData}>Submit</button>
          </div>
        :null
        }
          {show? 
          <div>
            < Details fname={fname} lname={lname} email={email} tel={tel}/>
            <button className="button" onClick={back}>Change information</button>
          </div>
          :null
          }
        </div>
      </header>
  );
}

export default App;
