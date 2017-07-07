import dva from 'dva';
import createLoading from 'dva-loading';
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';

import './index.css';

// 1. Initialize
const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
app.model(require('./models/user'));
app.model(require('./models/article'));
app.model(require('./models/archive'));
app.model(require('./models/category'));
app.model(require('./models/comment'));
app.model(require('./models/music'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
