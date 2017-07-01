import { message } from 'antd';
import { login, register, find } from '../services/user';

export default {
  namespace: 'user',

  state: {
    isModalVisible: false,
    hasUser: false,
  },

  effects: {
    *login({ payload }, { call }) {
      const { err } = yield call(login, payload.formData);
      if (err) {
        message.error('用户名或密码错误');
      } else {
        message.success('登录成功');
        payload.handleCancel();
      }
    },
    *register({ payload }, { call }) {
      yield call(register, payload.formData);
      message.success('注册成功');
    },
    *find({ payload }, { call }) {
      const { data } = yield call(find, payload.value);
      if (data.hasUser) {
        payload.callback('用户名已被占用');
      } else {
        payload.callback();
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
