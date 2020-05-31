import React from 'react'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout'
import MainPage from './components/MainPage';
import CatalogPage from './components/CatalogPage';
import AboutPage from './components/AboutPage';
import ContactsPage from './components/ContactsPage';
import GoodPage from './components/GoodPage';
import BasketPage from './components/BasketPage';
import NoPage from './components/NoPage';
import Footer from './components/Footer';


function App() {
  return (
    <Router> 
      <Layout> 
        <Switch>                         
          <Route exact path="/" component={MainPage} />
          <Route exact path="/catalog" component={CatalogPage} />
          <Route exact path="/catalog/:id" component={GoodPage} />
          <Route exact path="/basket" component={BasketPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contacts" component={ContactsPage} />
          <Route component={NoPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
