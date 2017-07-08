import React from 'react';
import { Menu, Row, Col, Icon, Button, Dropdown } from 'antd';
import { Link } from 'dva/router';
import MediaQuery from 'react-responsive';

import styles from './index.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 'look' };
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'user/checkLogin',
    });
  }
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

  handleLogout = () => {
    this.props.dispatch({
      type: 'user/logout',
    });
  };

  render() {
    const { hasLogined, username } = this.props;
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
