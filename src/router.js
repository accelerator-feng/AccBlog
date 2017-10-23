import React from 'react';
import { Router } from 'dva/router';

const routes = {
  path: '/',

  getComponents(nextState, cb) {
    import(/* webpackChunkName: 'index' */ './routes/Index')
      .then(chunk => cb(null, chunk))
      .catch(cb);
  },

  indexRoute: {
    getComponent(nextState, cb) {
      import(/* webpackChunkName: 'home' */ './routes/Home')
        .then(chunk => cb(null, chunk))
        .catch(cb);
    },
  },

  childRoutes: [
    {
      path: 'about',
      getComponent(nextState, cb) {
        import(/* webpackChunkName: 'about' */ './routes/About')
          .then(chunk => cb(null, chunk))
          .catch(cb);
      },
    },

    {
      path: 'archives(/:year)(/:month)',
      getComponent(nextState, cb) {
        import(/* webpackChunkName: 'archives' */ './routes/Archives')
          .then(chunk => cb(null, chunk))
          .catch(cb);
      },
    },

    {
      path: 'categories(/:category)',
      getComponent(nextState, cb) {
        import(/* webpackChunkName: 'categories' */ './routes/Categories')
          .then(chunk => cb(null, chunk))
          .catch(cb);
      },
    },

    {
      path: 'article/:id',
      getComponent(nextState, cb) {
        import(/* webpackChunkName: 'article' */ './routes/Article')
          .then(chunk => cb(null, chunk))
          .catch(cb);
      },
    },
  ],
};

function RouterConfig({ history }) {
  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
