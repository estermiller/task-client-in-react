import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './App.css';
import NavBar from './navigation/NavBar';
import Dialoge from './components/Dialoge/Dialoge';
import TaskHistory from './components/Task history/TaskHistory';
import Tasks from './components/Tasks/Tasks';
import Disconnection from './components/LogOut/Disconnection';
import AddTask from './components/addTask/AddTask';
import Home from './components/home/Home';


function App() {
  return (
    <div className="App">
      <Home />

      <Routes>
        <Route path="navBar" element={<NavBar />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="dialoge" element={<Dialoge />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="taskhistoru" element={<TaskHistory />} />
        <Route path="addtask" element={<AddTask />} />
        <Route path="logout" element={<Disconnection />} />
        <Route path="dialoge" element={<Dialoge />} />
        <Route path="*" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
