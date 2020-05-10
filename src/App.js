import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch,  Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/hats' component={HatsPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
      );
  }
  
}
  
export default App;
