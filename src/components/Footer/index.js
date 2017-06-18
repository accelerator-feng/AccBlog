import React from 'react';
import { Row, Col, Icon, Popover } from 'antd';

import styles from './index.css';
import QRcode from '../../assets/QRcode.png';

export default function Footer() {
  return (
    <Row className={styles.container}>
      <Col span={1} />
      <Col span={10}>
        <sapn className={styles.line} />
        <div className={styles.author} />
        <span className={styles.title}>未来的前端攻城狮</span>
        <span className={styles.desc}>Stay hungry. Stay foolish.</span>
      </Col>
      <Col span={12}>
        <div className={styles['social-font']}>
          <a
            href="https://github.com/accelerator-feng"
            target="_blank"
            title="github"
          >
            <Icon type="github" className={styles.icon} />
          </a>
          <a
            href="http://www.zhihu.com/people/yin-feng-56-5/activities"
            target="_blank"
            title="知乎"
          >
            <i className={`${styles.iconfont} ${styles.iconZhihu}`} />
          </a>
          <Popover
            placement="topLeft"
            content={<img src={QRcode} width="100px" height="100px" />}
          >
            <i className={`${styles.iconfont} ${styles.iconWeixin}`} />
          </Popover>
          <a
            href="mailto:accelerator-feng@gmail.com"
            target="_blank"
            title="Email Me"
          >
            <Icon type="mail" className={styles.icon} />
          </a>
        </div>
      </Col>
      <Col span={1} />
      <div className={styles.copyright}>
        Powered by
        {' '}
        <a
          href="https://github.com/dvajs/dva"
          target="_blank"
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
          title="Egg.js"
          className={styles['copyright-link']}
        >
          Egg
        </a>
        {' '}
        © 2017 Yin Feng
      </div>
    </Row>
  );
}
