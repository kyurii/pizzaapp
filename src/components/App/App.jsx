import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from "../NavBar";
import Homepage from "../Homepage";
import Cart from "../Cart";
import AlertMessage from "../AlertMessage";
import CurrencyModal from "../CurrencyModal";

import './App.scss';

function App({ currency: { showCurrencyModal }, alert }) {
  const currencyModal = showCurrencyModal && <CurrencyModal />
  const alertMessage = alert && <AlertMessage />

  return (
    <main role="main" className="main min-vh-100">
      <div className="container">
        { alertMessage }
        { currencyModal }
        <NavBar />
          <Switch>
            <Route path="/" exact component={ Homepage } />
            <Route path="/cart" component={ Cart } />

            <Redirect from="*" to="/" />
          </Switch>
      </div>
    </main>
  );
}

const mapStateToProps = ({ currency, alert }) => {
  return { currency, alert: alert.message };
}

export default connect(mapStateToProps, null)(App)
