import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import MakeMeme from '../containers/MakeMeme'
import Layout from '../containers/Layout'
import NotFound from '../containers/NotFound'
import Player from '../containers/Player';

import '../assets/styles/App.scss'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/MakeMeme" component={MakeMeme} />
        <Route exact path="/Player:id" component={Player} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App