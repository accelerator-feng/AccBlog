import React from 'react';
import { Card, Row, Col, Icon, Button, Pagination, Slider, Switch } from 'antd';
import { Link } from 'dva/router';

import styles from './HomePage.css';

export default class HomePage extends React.Component {
  render() {
    return (
      <Row>
        <Col span={1} />
        <Col span={17}>
          <Card
            title="shouldComponentUpdate及diff算法原理（转载）"
            extra={
              <span>
                <Icon type="clock-circle-o" />
                {' '}
                发表于 2017-04-19 By
                {' '}
                <Link href="/about">Yin Feng</Link>
              </span>
            }
            style={{
              color: '#817c7c',
              paddingTop: 25,
              fontSize: 5,
              marginTop: 20,
            }}
            bodyStyle={{ color: '#413f3f', fontSize: 20 }}
          >
            <div className={styles['article-content']}>
              <div>React官方文档中关于shouldComponentUpdate和diff算法的部分（翻译）</div>
              <Button
                style={{
                  background: '#ddd',
                  color: '#817c7c',
                  borderRadius: '14px',
                }}
              >
                Read More
              </Button>
            </div>
            <div className={styles['article-footer']}>
              <Icon type="folder" />{' '}<Link>Javascript</Link>&nbsp;&nbsp;
              <Icon type="tags" />{' '}<Link>React</Link>
            </div>
          </Card>
          <Pagination
            showQuickJumper
            defaultCurrent={1}
            defaultPageSize={5}
            total={20}
            className={styles.pagination}
          />
        </Col>
        <Col span={5}>
          <Card
            style={{ width: '90%', float: 'right', marginTop: 20, height: 66 }}
            bordered={false}
          >
            <img
              alt="歌曲图片"
              src="http://p1.music.126.net/QDNDOPR0VxlXxFdMRSAVlQ==/18897306346769246.jpg?param=90y90"
              width="66"
            />
            <div className={styles.mask} />
            <span className={styles['music-info']}>
              <Switch size="small" defaultChecked={false} /> 牵丝戏 - 银临/Aki阿杰
            </span>
            <Slider className={styles.slider} />
          </Card>
          <Card
            title="分类"
            extra={<Link href="/categories">More</Link>}
            style={{ width: '90%', float: 'right', marginTop: 20, padding: 10 }}
            bordered={false}
            bodyStyle={{ margin: '10px 0 0 10px' }}
          >
            <Link><p>Card content</p></Link>
            <Link><p>Card content</p></Link>
            <Link><p>Card content</p></Link>
          </Card>
          <Card
            title="归档"
            extra={<Link href="/categories">More</Link>}
            style={{ width: '90%', float: 'right', marginTop: 20, padding: 10 }}
            bordered={false}
            bodyStyle={{ margin: '10px 0 0 10px' }}
          >
            <Link><p>Card content</p></Link>
            <Link><p>Card content</p></Link>
            <Link><p>Card content</p></Link>
          </Card>
          <Card
            title="友情链接"
            style={{ width: '90%', float: 'right', marginTop: 20, padding: 10 }}
            bordered={false}
            bodyStyle={{ margin: '10px 0 0 10px' }}
          >
            <Link><p>Card content</p></Link>
            <Link><p>Card content</p></Link>
            <Link><p>Card content</p></Link>
          </Card>
        </Col>
        <Col span={1} />
      </Row>
    );
  }
}
