import React from 'react';
import { Router } from 'dva/router';
import Index from './routes/Index';
import Home from './routes/Home';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = {
    path: '/',

    component: Index,

    indexRoute: { component: Home },

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
            .then(chunk => {
              registerModel(app, require('./models/archive'));
              cb(null, chunk);
            })
            .catch(cb);
        },
      },

      {
        path: 'categories(/:category)',
        getComponent(nextState, cb) {
          import(/* webpackChunkName: 'categories' */ './routes/Categories')
            .then(chunk => {
              registerModel(app, require('./models/category'));
              cb(null, chunk);
            })
            .catch(cb);
        },
      },

      {
        path: 'article/:id',
        getComponent(nextState, cb) {
          import(/* webpackChunkName: 'article' */ './routes/Article')
            .then(chunk => {
              registerModel(app, require('./models/comment'));
              cb(null, chunk);
            })
            .catch(cb);
        },
      },
    ],
  };

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
