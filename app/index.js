import React, { Component }    from 'react';
import ReactDOM                from 'react-dom';

import Header from './components/header/h_mural';
import Main   from './components/main/m_dashboard';
import Footer from './components/footer/f_mural';

import styles from './style/index.css';

class Root extends Component {

 constructor(props) {
   super(props);
 }

 render() {
   return (
     <div>
        <Header />
        <Main />
        <Footer />
      </div>
   );
 }
}


ReactDOM.render(<Root/>, document.getElementById('mainLayout'));
