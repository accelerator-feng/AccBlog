import fetch from '../utils/request';

export default {
  namespace: 'archive',

  state: {},

  effects: {
    *fetch({ payload }, { call, put }) {
      let date = '/';
      if (payload.month) {
        date = `/${payload.year}/${payload.month}`;
      } else if (payload.year) {
        date = `/${payload.year}`;
      }
      const { data } = yield call(fetch, `/api/archives${date}`);
      console.log(data);
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
