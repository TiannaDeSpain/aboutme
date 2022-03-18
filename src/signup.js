import './App.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function App() {
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    function handleSubmit(e){
        alert('Thanks ' + name + " you are now subscribed with your email " + email);
        e.preventDefault();
      }
    function  handleChange(e, setfunction) {
        setfunction(e.target.value);
    }

    // JSX for form page
    return (
      <div className="wrapper">
        <h1>Subscribe now!</h1>
        <form onSubmit={handleSubmit}>
        <fieldset>
         <label>
           <p>Name</p>
           <input onChange= {(e)=>{handleChange(e, setname)}} name="name" />
         </label>
         <label>
           <p>Email</p>
           <input onChange= {(e)=>{handleChange(e, setemail)}}name="email" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
        </form>
        <button style = {{"background-color": "lightBlue"}}><Link to="/"> HOME </Link></button>
      </div>
    )
}

export default App;
