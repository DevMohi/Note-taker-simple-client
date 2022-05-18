import './App.css';
import { Route, Routes } from 'react-router-dom';
import Application from './Pages/Application';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Pages/Todo';
import Login from './Pages/Login';
import Header from './Pages/Header';
import RequireAuth from './RequireAuth/RequireAuth';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Application></Application>}></Route>
        <Route path='todo' element={<RequireAuth><Todo></Todo></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>


    </div>
  );
}

export default App;
