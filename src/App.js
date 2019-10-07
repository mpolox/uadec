import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import CreateNotification from "./components/create/CreateNotification";
import NotificationHistory from "./components/history/NotificationHistory";
import Admin from "./components/admin/Admin";
import NotificationDetails from "./components/dashboard/NotificationDetails";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path='/new' component={ CreateNotification } />
          <Route path='/history' component={ NotificationHistory } />
          <Route path='/admin' component={ Admin } />
          <Route path='/notification/:id' component={ NotificationDetails } />
        </Switch>      
    </BrowserRouter>    
  );
}

export default App;
