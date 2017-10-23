import React from 'react';
import {
  Menu,
  Row,
  Col,
  Icon,
  Button,
  Dropdown,
  Upload,
  message,
  Modal,
} from 'antd';
import { Link } from 'dva/router';
import MediaQuery from 'react-responsive';

import styles from './index.scss';

const Dragger = Upload.Dragger;

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('只能上传JPG文件!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('头像必须小于2MB!');
  }
  return isJPG && isLt2M;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'look',
      visible: false,
      imageUrl: '',
    };
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'user/checkLogin',
    });
  }
  onChange = info => {
    const status = info.file.status;
    if (status === 'done') {
      this.setState({ imageUrl: info.file.response.imageUrl });
      this.setState({ visible: false });
    } else if (status === 'error') {
      message.error('头像上传失败');
    }
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
    if (e.key === 'login') {
      this.props.dispatch({
        type: 'user/save',
        payload: { isModalVisible: true },
      });
    }
  };

  changeAvatar = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleLogout = () => {
    this.props.dispatch({
      type: 'user/logout',
    });
  };

  render() {
    const { hasLogined, username, avatar } = this.props;
    const { imageUrl, visible } = this.state;
    const menu = (
      <Menu onClick={this.handleClick}>
        <Menu.Item key="index">
          <Link to="/">主页</Link>
        </Menu.Item>
        <Menu.Item key="archives">
          <Link to="/archives">归档</Link>
        </Menu.Item>
        <Menu.Item key="categories">
          <Link to="/categories">分类</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">关于</Link>
        </Menu.Item>
        {hasLogined
          ? <Menu.Item key="logout">
              <span onClick={this.handleLogout}>退出</span>
            </Menu.Item>
          : <Menu.Item key="login">
              登录
            </Menu.Item>}
      </Menu>
    );
    const title = (
      <Link to="/">
        <img
          src="http://cdn.yinfengblog.com/logo.png"
          alt="logo"
          className={styles.logo}
        />
        <span className={styles.title}>和光同尘</span>
        <span className={styles.desc}>前端小白的学习笔记</span>
      </Link>
    );
    return (
      <Row className={styles.container}>
        <MediaQuery query="(min-device-width:800px)">
          <Col span={1} />
          <Col span={9}>{title}</Col>
          <Col span={13}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              theme="dark"
              style={{
                position: 'absolute',
                bottom: '-140px',
                fontSize: '15px',
                right: 0,
              }}
            >
              <Menu.Item key="home">
                <Link to="/"><Icon type="appstore" />主页</Link>
              </Menu.Item>
              <Menu.Item key="archives">
                <Link to="/archives"><Icon type="appstore" />归档</Link>
              </Menu.Item>
              <Menu.Item key="categories">
                <Link to="/categories"><Icon type="appstore" />分类</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about"><Icon type="appstore" />关于</Link>
              </Menu.Item>
              {hasLogined
                ? <Menu.Item key="logout">
                    <Button type="primary" className={styles.username}>
                      {avatar || imageUrl
                        ? <img
                            className={styles.avatar}
                            src={imageUrl || avatar}
                            alt="头像"
                            onClick={this.changeAvatar}
                          />
                        : <Icon
                            type="github"
                            onClick={this.changeAvatar}
                            style={{ marginRight: 0 }}
                          />}
                      {username}
                    </Button>
                    <Button onClick={this.handleLogout}>
                      退出
                    </Button>
                  </Menu.Item>
                : <Menu.Item key="login">
                    <Icon type="login" />注册/登陆
                  </Menu.Item>}
            </Menu>
          </Col>
          <Col span={1} />
          <Modal
            title="设置头像"
            visible={visible}
            onCancel={this.handleCancel}
            footer={null}
          >
            <Dragger
              name="avatar"
              showUploadList={false}
              action="/api/avatar"
              data={{ username }}
              onChange={this.onChange}
              beforeUpload={beforeUpload}
              headers={{ 'x-csrf-token': getCookie('csrfToken') }}
            >
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">
                点击或拖动文件到此区域上传
              </p>
              <p className="ant-upload-hint">
                头像必须小于2MB且只能上传JPG文件
              </p>
            </Dragger>
          </Modal>
        </MediaQuery>
        <MediaQuery query="(max-device-width:800px)">
          <Col span={1} />
          <Col span={17}>
            {title}
          </Col>
          <Col span={5}>
            <Dropdown overlay={menu} placement="bottomRight">
              <Icon type="menu-fold" className={styles.menu} />
            </Dropdown>
          </Col>
          <Col span={1} />
        </MediaQuery>
      </Row>
    );
  }
}
