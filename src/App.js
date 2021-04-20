import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/Error';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/profile/:username">
            <Profile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
