import fetch from '../../utils/request';

export default {
  namespace: 'user',

  state: {
    isModalVisible: false,
    hasLogined: false,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { data } = yield call(
        fetch,
        `http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=${payload.userName}&password=${payload.password}&r_userName=${payload.r_userName}&r_password=${payload.r_password}&r_confirmPassword=${payload.r_confirmPassword}`,
      );
      yield put({
        type: 'save',
        payload: { hasLogined: true, NickUserName: data.NickUserName },
      });
    },
    *register({ payload }, { call, put }) {
      // eslint-disable-line
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
