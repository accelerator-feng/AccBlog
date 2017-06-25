import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Archives from './routes/Archives';
import Categories from './routes/Categories';
import About from './routes/About';
import Article from './routes/Article';
import HomePage from './routes/HomePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRoute component={HomePage} />
        <Route path="archives" component={Archives} />
        <Route path="categories" component={Categories} />
        <Route path="about" component={About} />
        <Route path="article/:id" component={Article} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
