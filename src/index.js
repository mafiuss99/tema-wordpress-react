import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header.jsx';
import NoticiasList from '@components/noticias/NoticiasList.jsx';

ReactDOM.render(
  <Header/>,
  document.getElementById('header')
);

ReactDOM.render(
  <NoticiasList />,
  document.getElementById('app')
);

ReactDOM.render(
  <h2>footer</h2>,
  document.getElementById('footer')
);

