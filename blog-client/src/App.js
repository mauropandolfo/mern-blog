import Home from './components/pages/home/Home.js';
import Topbar from './components/topbar/Topbar.js' 
import Single from './components/pages/single/Single'
import Write from './components/pages/write/Write'
import Settings from './components/pages/settings/Settings.js';
import Login from './components/pages/login/Login.js';
import Register from './components/pages/register/Register.js';
import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  const user = false
  return (
      <Router>
        <Topbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/register'>
            {user ? <Home/> : <Register/>}
          </Route>
          <Route path='/login'>
            {user ? <Home/> : <Login/>}
          </Route>
          <Route path='/write'>
            {user ? <Write/> : <Login/>}
          </Route>
          <Route path='/settings'>
            {user ? <Settings/> : <Login/>}
          </Route>
          <Route path='/post/:postId'>
            <Single/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
