import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Link , Route , Routes} from 'react-router-dom'
import  Employee from './Component/Employee';
import Project from './Component/Project';
import Department from './Component/Department';

// function App(){
//   return <div>
//     <h2>App Component</h2>
//     <ul>
//       <li><Link to='/Employee'>Employee</Link></li>
//       <li><Link to='Project'>Project</Link></li>
//       <li><Link to='Department'>Department</Link></li>
//     </ul>
//     <Routes>
//       <Route path='/Employee' Component={Employee}></Route>
//       <Route path='/Project' Component={Project}></Route>
//       <Route path='/Department' Component={Department}></Route>
//     </Routes>
//   </div>
// }

// ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,document.getElementById('root'));

function App(){
  return <div>
    <h2>App Component</h2>
    <ul>
      <li><Link to='/Employee'>Employee</Link></li>
      <li><Link to='Project'>Project</Link></li>
      <li><Link to='Department'>Department</Link></li>
    </ul>
    <Routes>
      <Route path='/' element={<Employee/>}></Route> {/*In latest verson there is no use of components instead we are now using 'element'..*/}
      <Route path='/Employee' element={<Employee/>}></Route>
      <Route path='/Project' element={<Project/>}></Route>
      <Route path='/Department' element={<Department/>}></Route>
    </Routes> {/*Instead of switches we are using 'routes' */}
  </div>
}

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,document.getElementById('root'));


