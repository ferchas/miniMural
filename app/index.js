import React, { Component }    from 'react';
import ReactDOM                from 'react-dom';

class Root extends Component {

 constructor(props) {
   super(props);
 }

 render() {
   return (
     <p>Hello World</p>
   );
 }
}


ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
