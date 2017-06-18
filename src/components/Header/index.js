import React from 'react';
import { Menu, Row, Col, Icon, Button } from 'antd';
import { Link } from 'dva/router';

// import Login from '../Login';

import styles from './index.css';
import logo from '../../assets/logo.png';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 'look' };
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
    if (e.key === 'login') {
      this.props.dispatch({
        type: 'user/show',
        payload: { isModalVisible: true },
      });
    }
  };

  handleLogout = e => {
    this.props.dispatch({
      type: 'user/logout',
    });
  };

  render() {
    const { hasLogined, NickUserName } = this.props,
      userShow = hasLogined
        ? <Menu.Item key="logout">
            <Button type="primary">
              {NickUserName}
            </Button>
            <Button onClick={this.handleLogout}>
              退出
            </Button>
          </Menu.Item>
        : <Menu.Item key="login">
            <Icon type="login" />注册/登陆
          </Menu.Item>;
    return (
      <Row className={styles.container}>
        <Col span={1} />
        <Col span={10}>
          <Link href="/">
            <img src={logo} alt="logo" className={styles.logo} />
            <span className={styles.title}>和光同尘</span>
            <span className={styles.desc}>前端小白的学习笔记</span>
          </Link>
        </Col>
        <Col span={12}>
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
            <Menu.Item key="look">
              <Link to="/"><Icon type="appstore" />随便看看</Link>
            </Menu.Item>
            <Menu.Item key="messageBoard">
              <Link to="/message"><Icon type="appstore" />留言板</Link>
            </Menu.Item>
            <Menu.Item key="music">
              <Link to="/music"><Icon type="appstore" />音乐云</Link>
            </Menu.Item>
            <Menu.Item key="movie">
              <Link to="/movie"><Icon type="appstore" />电影院</Link>
            </Menu.Item>
            {userShow}
          </Menu>
        </Col>
        <Col span={1} />
      </Row>
    );
  }
}
