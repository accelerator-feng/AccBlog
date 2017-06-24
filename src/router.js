import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Archives from './routes/Archives';
import HomePage from './routes/HomePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRoute component={HomePage} />
        <Route path="archive" component={Archives} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
