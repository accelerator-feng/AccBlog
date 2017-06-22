import dva from 'dva';
import createLoading from 'dva-loading';
import { browserHistory } from 'dva/router';
import './index.css';

// 1. Initialize
const app = dva({
  history: browserHistory,
});

// 2. Plugins
// app.use({});
app.use(
  createLoading({
    loading: {
      global: false,
      models: {
        users: false,
        music: false,
        movies: false,
        articles: false,
        bind: false,
        auth: false,
        personal: false,
        home: false,
        chat: false,
      },
    },
  }),
);

// 3. Model
app.model(require('./models/user'));
app.model(require('./models/article'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
