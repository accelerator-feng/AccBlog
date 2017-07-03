import { fetch } from '../services/category';

export default {
  namespace: 'category',

  state: {},

  effects: {
    *fetch({ payload }, { call, put }) {
      const { data } = yield call(fetch, payload);
      yield put({
        type: 'save',
        payload: data,
      });
    },
  },

  reducers: {
    save(state, action) {
      NProgress.done();
      return { ...state, ...action.payload };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const pattern = new RegExp(/\/categories\/\w+/);
        if (pattern.test(pathname)) {
          NProgress.start();
          dispatch({ type: 'fetch', payload: pathname });
        } else if (pathname === '/categories') {
          NProgress.start();
          dispatch({ type: 'fetch', payload: '/categories/JavaScript' });
        }
      });
    },
  },
};
