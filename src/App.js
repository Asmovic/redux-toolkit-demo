import { Fragment } from "react";
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Home'
import Employees from './components/Employees'
import Counter from './components/Counter'
import Users from './components/Users'

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/employees"} element={<Employees />} />
        <Route path={"/counter"} element={<Counter />} />
        <Route path={"/users"} element={<Users />} />
      </Routes>
    </Fragment>
  );
}

export default App;
