import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../imports/ui/components/login.jsx';
import Landing from '../imports/ui/components/landing.jsx';
import Navbar from '../imports/ui/components/navbar.jsx';
import Faq from '../imports/ui/components/faq.jsx';
import Woohoo from '../imports/ui/components/woohoo.jsx';
import Apply from '../imports/ui/components/apply.jsx';

export const renderRoutes = () => (
  <Router>
    <Switch>
      <Navbar>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/faq" component={Faq} />
        <Route path="/apply" component={Apply} />
        <Route path="/woohoo" component={Woohoo} />
      </Navbar>
    </Switch>
  </Router>
);