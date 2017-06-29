import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import Index from './routes/Index';
import Archives from './routes/Archives';
import Categories from './routes/Categories';
import About from './routes/About';
import Article from './routes/Article';
import Home from './routes/Home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Index}>
        <IndexRoute component={Home} />
        <Route path="archives(/:year)(/:month)" component={Archives} />
        <Route path="categories(/:category)" component={Categories} />
        <Route path="about" component={About} />
        <Route path="article/:id" component={Article} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
