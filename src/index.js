import React from 'react';
import ReactDOM from 'react-dom';

/*
 * 1-settings and 2-tools are imported via webpack prependData option in sass-loader
 */
import './scss/3-generic/*.scss';
import './scss/4-elements/*.scss';
import './scss/5-objects/*.scss';

//Import App
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));
