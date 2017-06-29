import { login, register } from '../services/user';

export default {
  namespace: 'user',

  state: {
    isModalVisible: false,
    hasLogined: false,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { data } = yield call(login, payload);
      data.name = 1;
      yield put({ type: 'save' });
    },
    *register({ payload }, { call, put }) {
      const { data } = yield call(register, payload);
      data.name = 1;
      yield put({ type: 'save' });
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
