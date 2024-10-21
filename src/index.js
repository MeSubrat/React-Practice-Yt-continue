import React from 'react';
import ReactDOM from 'react-dom';
import  Employee from './Component/Employee';
import Project from './Component/Project';
import Department from './Component/Department';
import {BrowserRouter , Link , Switch , Route , Routes} from 'react-router-dom'

function App(){
  return <div>
    <h2>App Component</h2>
    <ul>
      <li><Link to='/Employee'>Employee</Link></li>
      <li><Link to='Project'>Project</Link></li>
      <li><Link to='Department'>Department</Link></li>
    </ul>
    <Routes>
      <Route path='/Employee' Component={Employee}></Route>
      <Route path='/Project' Component={Project}></Route>
      <Route path='/Department' Component={Department}></Route>
    </Routes>
  </div>
}

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,document.getElementById('root'));


