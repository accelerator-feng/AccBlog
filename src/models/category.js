import { fetch } from '../services/category';

export default {
  namespace: 'category',

  state: {},

  effects: {
    *fetch({ payload }, { call, put }) {
      const { data } = yield call(fetch, payload.category);
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
