import fetch from '../utils/request';

export default {
  namespace: 'article',

  state: {
    articles: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const { data } = yield call(fetch, `api/page/${payload}`);
      yield put({
        type: 'load',
        payload: { articles: data.articles },
      });
    },
  },

  reducers: {
    load(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
