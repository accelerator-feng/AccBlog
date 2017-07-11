import { message } from 'antd';
import { login, register, query, logout, checkLogin } from '../services/user';

export default {
  namespace: 'user',

  state: {
    isModalVisible: false,
    hasLogined: false,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { err, data } = yield call(login, payload.formData);
      if (err) {
        message.error('用户名或密码错误');
      } else {
        message.success('登录成功');
        payload.handleCancel();
        yield put({
          type: 'save',
          payload: Object.assign(data, { hasLogined: true }),
        });
      }
    },
    *register({ payload }, { call }) {
      yield call(register, payload.formData);
      message.success('注册成功');
    },
    *query({ payload }, { call }) {
      const { err, data } = yield call(query, payload.value);
      if (!err && data.hasUser) {
        payload.callback('用户名已被占用');
      } else {
        payload.callback();
      }
    },
    *logout({ payload }, { call, put }) {
      yield call(logout);
      yield put({
        type: 'save',
        payload: { hasLogined: false, username: '' },
      });
    },
    *checkLogin({ payload }, { call, put }) {
      const { data } = yield call(checkLogin);
      yield put({
        type: 'save',
        payload: data.username
          ? { hasLogined: true, username: data.username, avatar: data.avatar }
          : { hasLogined: false, username: '', avatar: '' },
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
