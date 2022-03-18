import Home from './Home.js'
import Signup from './signup.js'
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return(<Routes> <Route path='/'element={
    <Home/>
  }
/> <Route path='/signup'element={
    <Signup/>
  }
/> </Routes>)
}

export default App 