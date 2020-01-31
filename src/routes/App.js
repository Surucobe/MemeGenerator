import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import '../App.css'
import Home from '../containers/Home'
import Layout from '../containers/Layout'

const App = () =>(
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component={Home} />
    </Layout>
  </BrowserRouter>
)

export default App;