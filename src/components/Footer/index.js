import React from 'react';
import { Row, Col, Icon, Popover } from 'antd';
import { Link } from 'dva/router';
import MediaQuery from 'react-responsive';

import styles from './index.scss';

export default function Footer() {
  const socialFont = (
    <div className={styles['social-font']}>
      <a
        href="https://github.com/accelerator-feng"
        target="_blank"
        rel="noopener noreferrer"
        title="github"
      >
        <Icon type="github" className={styles.icon} />
      </a>
      <a
        href="http://www.zhihu.com/people/yin-feng-56-5/activities"
        target="_blank"
        rel="noopener noreferrer"
        title="知乎"
      >
        <i className={`${styles.iconfont} ${styles.iconZhihu}`} />
      </a>
      <Popover
        placement="topLeft"
        content={
          <img
            src="http://cdn.yinfengblog.com/QRcode.png"
            width="100px"
            height="100px"
            style={{ marginTop: '8px' }}
            alt="我的微信二维码"
          />
        }
      >
        <i className={`${styles.iconfont} ${styles.iconWeixin}`} />
      </Popover>
      <a
        href="mailto:accelerator-feng@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Email Me"
      >
        <Icon type="mail" className={styles.icon} />
      </a>
    </div>
  );
  return (
    <div className={styles.container}>
      <Row>
        <MediaQuery query="(min-device-width:750px)">
          <Col span={2} />
          <Col span={12}>
            <sapn className={styles.line} />
            <div className={styles.author} />
            <span className={styles.title}>未来的前端攻城狮</span>
            <span className={styles.desc}>Stay hungry. Stay foolish.</span>
          </Col>
          <Col span={8}>
            {socialFont}
          </Col>
          <Col span={2} />
        </MediaQuery>
        <MediaQuery query="(max-device-width:750px)">
          <Col span={4} />
          <Col span={16}>
            <div className={styles.mtitle}>未来的前端攻城狮</div>
            <div className={styles.mdesc}>Stay hungry. Stay foolish.</div>
            {socialFont}
          </Col>
          <Col span={4} />
        </MediaQuery>
      </Row>
      <div className={styles.copyright}>
        Powered by
        {' '}
        <a
          href="https://github.com/dvajs/dva"
          target="_blank"
          rel="noopener noreferrer"
          title="dva.js"
          className={styles['copyright-link']}
        >
          dva
        </a>
        {' '}
        and
        {' '}
        <a
          href="https://eggjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="Egg.js"
          className={styles['copyright-link']}
        >
          Egg
        </a>
        {' '}
        © 2017
        {' '}
        <Link to="/about" className={styles['copyright-link']}>
          Yin Feng
        </Link>
      </div>
    </div>
  );
}
