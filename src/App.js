import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Land from './components/Land/Land';
import Task1 from './components/Task1/Task1';
import Home from './components/Task2/Home/Home'
import AdminLog from './components/Task2/AdminLog/AdminLog'
import Home2 from './components/Task2/Home2/Home2';
import Admin from './components/Task2/Admin/Admin';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='' element={<Land/>}/>
          <Route path='/Task1' element={<Task1/>}/>
          <Route path='/Task2' element={<Home/>}>
            <Route path='AdminLog' element={<AdminLog/>}/>
            <Route path='' element={<Home2/>}/>
          </Route>
          <Route path='Admin' element={<Admin/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
