import { login, register, find } from '../services/user';

export default {
  namespace: 'user',

  state: {
    isModalVisible: false,
    hasUser: false,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { data } = yield call(login, payload);
      data.name = 1;
      yield put({ type: 'save' });
    },
    *register({ payload }, { call }) {
      yield call(register, payload);
    },
    *find({ payload }, { call, put }) {
      if (payload === undefined || payload.replace(/\s/g, '') === '') {
        yield put({ type: 'save', payload: { hasUser: false } });
        return;
      }
      const { data } = yield call(find, payload);
      yield put({ type: 'save', payload: { hasUser: data } });
    },
  },

  reducers: {
    show(state, action) {
      return { ...state, ...action.payload };
    },
    hide(state, action) {
      return { ...state, ...action.payload };
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
