import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';
import NoMatch from './static/nomatch1.jpg';

const App = () => (
    <div className="main">
      <img src={NoMatch} alt="logo" />
    </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
