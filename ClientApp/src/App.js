import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { HelpPage } from './components/HelpPage';
import { BookTicketForm } from './components/BookTicketForm';
import { Footer } from './components/Footer';
import { TicketsPage } from './components/TicketsPage';
import {AuthForms} from './components/AuthForms';

// import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
// import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
// import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/tickets' component={TicketsPage}/>
            <Route exact path='/support' component={HelpPage} />
            <Route exact path="/booking" component={BookTicketForm} />
            <Route exact path="/authorize" component={AuthForms} />
        </Layout>
    );
            // <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />

  }
}
