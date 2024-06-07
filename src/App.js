import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Bookshelf from './components/Bookshelf'
import NotFound from './components/NotFound'

import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Switch>
      <Route exact path='/' component ={Home} />
      <Route exact path='/shelf' component ={Bookshelf} />
      <Route exact path='/not-found' component ={NotFound} />
      <Redirect to ='/not-found'  />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
