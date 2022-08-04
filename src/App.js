import './App.css';
import SearchBox from './body/SearchBox';
import Header from './header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './body/result/SearchPage';
import HomePage from './body/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Header />
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
