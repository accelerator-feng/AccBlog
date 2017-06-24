import React from 'react';
import { Slider, Switch, Card } from 'antd';

import styles from './index.css';

export default class index extends React.Component {
  render() {
    return (
      <Card
        style={{
          width: '90%',
          float: 'right',
          marginTop: 20,
          height: 66,
        }}
        bordered={false}
      >
        <img
          alt="歌曲图片"
          src="http://p1.music.126.net/QDNDOPR0VxlXxFdMRSAVlQ==/18897306346769246.jpg?param=90y90"
          width="66"
        />
        <div className={styles.mask} />
        <span className={styles['music-info']}>
          <Switch size="small" defaultChecked={false} /> 江南 - 林俊杰
        </span>
        <Slider className={styles.slider} />
      </Card>
    );
  }
}
