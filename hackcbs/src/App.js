// import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import InterviewPrep from './components/dashboard/interview/InterviewPrep';
import Jobs from './components/dashboard/jobs/Jobs';
import Courses from './components/dashboard/courses/Courses';
import './App.css';
import Video from './components/video/Video';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/signup' element={<Register/>}></Route>
        <Route path='/user/interview' element={<InterviewPrep/>}></Route>
        <Route path='/user/jobs' element={<Jobs/>}></Route>
        <Route path='/user/courses' element={<Courses/>}></Route>
        <Route path='/video' element={<Video/>}></Route>
      </Routes>
      {/* <Register/> */}
    </div>
  );
}

export default App;
