import React, { Component }    from 'react';
import ReactDOM                from 'react-dom';

import Header from './components/header/';
import Main   from './components/main/';
import Footer from './components/footer';

import styles from './style/index.css';

const Root = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

ReactDOM.render(<Root/>, document.getElementById('mainLayout'));
