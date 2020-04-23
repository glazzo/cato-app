import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import StatusMean from './pages/statusMean';

const Home = () => (
  <article>
    <h1>Welcome</h1>
    <img src="https://i.makeagif.com/media/1-25-2018/uKJ-SD.gif" alt="otrogato"/>
  </article>
 );
function App() {

  return (
    <React.Fragment>
      <nav>
        <ul>
          <li><Link to="/" data-cy="home">Home</Link></li>
          <li><Link to="/status" data-cy="status">Status</Link></li>
        </ul>
      </nav>
      <Switch>      
        <Route exact path="/status" component={StatusMean} />
        <Route  path="/" component={Home} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
