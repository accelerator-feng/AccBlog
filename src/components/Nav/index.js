import React from 'react';
import { Menu, Row, Col, Icon } from 'antd';
import { Link } from 'dva/router';

import Login from '../Login';

import styles from './index.css';
import logo from '../../assets/logo.png';

export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 'look' };
  }

  handleClick = e =>
    this.setState({
      current: e.key,
    });

  render() {
    return (
      <Row className={styles.container}>
        <Col span={3} />
        <Col span={4}>
          <Link href="/">
            <img src={logo} alt="logo" className={styles.logo} />
            <span className={styles.title}>和光同尘</span>
          </Link>
        </Col>
        <Col span={14}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="look">
              <Link to="/look"><Icon type="appstore" />随便看看</Link>
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
            <Menu.Item key="login">
              <Icon type="login" />&nbsp;&nbsp;注册/登录
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={3} />
      </Row>
    );
  }
}
