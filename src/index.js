import dva from 'dva';
import { browserHistory } from 'dva/router';

import './index.css';

// 1. Initialize
const app = dva({
  history: browserHistory,
});

// 2. Plugins
// app.use({});
app.use({});

// 3. Model
app.model(require('./models/user'));
app.model(require('./models/article'));
app.model(require('./models/archive'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
