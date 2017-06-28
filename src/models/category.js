import fetch from '../utils/request';

export default {
  namespace: 'category',

  state: {},

  effects: {
    *fetch({ payload }, { call, put }) {
      const { data } = yield call(fetch, `/api/categories/${payload.category}`);
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
};
