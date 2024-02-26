import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import NotFound from './NotFound';
import NewExpense from './NewExpense';


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path='/newexpense' element={<NewExpense />}/>
            <Route path='*'  element={<NotFound />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
