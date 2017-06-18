import React from 'react';
import { connect } from 'dva';
import { BackTop } from 'antd';

import Header from '../components/Header';
import Modal from '../components/Modal';
import Footer from '../components/Footer';

import styles from './IndexPage.css';

class IndexPage extends React.Component {
  render() {
    const {
      children,
      isModalVisible,
      hasLogined,
      NickUserName,
      dispatch,
    } = this.props;
    return (
      <div>
        <Header
          dispatch={dispatch}
          hasLogined={hasLogined}
          NickUserName={NickUserName}
        />
        <div className={styles.children}>
          {children}
        </div>
        <Footer />
        <Modal dispatch={dispatch} ismodalVisible={isModalVisible} />
        <BackTop visibilityHeight="300">
          <div className={styles['ant-back-top-inner']}>UP</div>
        </BackTop>
      </div>
    );
  }
}

export default connect(state => {
  return {
    isModalVisible: state.user.isModalVisible,
    hasLogined: state.user.hasLogined,
    NickUserName: state.user.NickUserName,
  };
})(IndexPage);
