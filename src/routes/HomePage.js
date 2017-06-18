import React from 'react';
import { Card, Row, Col, Icon, Button, Pagination } from 'antd';
import { Link } from 'dva/router';

import styles from './HomePage.css';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col span={1} />
        <Col span={18}>
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
              width: 900,
              color: '#817c7c',
              paddingTop: 20,
              fontSize: 15,
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
              width: 900,
              color: '#817c7c',
              paddingTop: 20,
              fontSize: 15,
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
              width: 900,
              color: '#817c7c',
              paddingTop: 20,
              fontSize: 15,
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
              width: 900,
              color: '#817c7c',
              paddingTop: 20,
              fontSize: 15,
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
              width: 900,
              color: '#817c7c',
              paddingTop: 20,
              fontSize: 15,
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
        <Col span={5} />
      </Row>
    );
  }
}
