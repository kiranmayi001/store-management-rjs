import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import AdminDash from './Pages/AdminDash/AdminDash';
import ExecDash from './Pages/ExecDash/ExecDash';
import Order from './Pages/Order/Order';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard/admin' component={AdminDash} />
          <Route exact path='/dashboard/executive' component={ExecDash} />
          <Route exact path='/order/:orderId' component={Order} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
