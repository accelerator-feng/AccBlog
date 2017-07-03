import { fetch } from '../services/archive';

export default {
  namespace: 'archive',

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
        const pattern = new RegExp(/\/archives(\/\d{4})?(\/\d{2})?/);
        if (pattern.test(pathname)) {
          NProgress.start();
          dispatch({ type: 'fetch', payload: pathname });
        }
      });
    },
  },
};
