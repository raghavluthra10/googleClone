import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/search' exact>
            <SearchPage  />
          </Route>
          <Route path='/' exact >
            <Home  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//2 33