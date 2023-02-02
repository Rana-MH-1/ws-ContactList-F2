
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBarr from './Components/NavBarr';
import AddUser from './Pages/AddUser';
import UserLists from './Pages/UserLists';


function App() {
  return (
    <Router>
      <NavBarr/>
      <Routes>
        <Route path='/add' element={<AddUser/>} />
        <Route path='/users' element={<UserLists/>} />
      </Routes>
    </Router>
  );
}

export default App;
