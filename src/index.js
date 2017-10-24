import dva from 'dva';
import createLoading from 'dva-loading';
import { message } from 'antd';
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';

import './index.scss';

const ERROR_MSG_DURATION = 3;

// 1. Initialize
const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
app.model(require('./models/user'));
app.model(require('./models/article'));
app.model(require('./models/music'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
