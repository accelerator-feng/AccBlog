import { login, register, find } from '../services/user';

export default {
  namespace: 'user',

  state: {
    isModalVisible: false,
    hasUser: false,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { data, err } = yield call(login, payload);
      if (err) {
        yield put({ type: 'save', payload: { err: '用户名或密码错误' } });
      } else {
        yield put({ type: 'save', payload: data });
      }
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
