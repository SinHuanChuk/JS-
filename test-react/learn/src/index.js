import React from 'react';
import ReactDOM from 'react-dom';
import Void from './components/Void'
import Operation from './components/Operation'
import Other from './components/Other'

ReactDOM.render(<Other books = {
  [{id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },]}/>, document.getElementById('root'));
// ReactDOM.render(<Void/>, document.getElementById('root'));
// ReactDOM.render(<Operation />, document.getElementById('root'));



