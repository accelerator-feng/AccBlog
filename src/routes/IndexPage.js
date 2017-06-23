import React from 'react';
import { connect } from 'dva';
import { BackTop } from 'antd';
import MediaQuery from 'react-responsive';

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
        <MediaQuery query="(min-device-width:800px)">
          <a href="https://github.com/accelerator-feng">
            <img
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                border: 0,
                width: 135,
                height: 135,
              }}
              src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"
              alt="Fork me on GitHub"
            />
          </a>
        </MediaQuery>
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
