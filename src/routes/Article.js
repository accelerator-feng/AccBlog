import React from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Icon } from 'antd';
import { Link } from 'dva/router';
import marked from 'marked';
import Sidebar from '../components/Sidebar';

import styles from './Article.css';

class Article extends React.Component {
  render() {
    const markdownString = marked(
      `

`,
      {
        renderer: new marked.Renderer(),
        sanitize: true,
      },
    );

    const { params } = this.props;
    console.log(params);
    return (
      <Row>
        <Col span={1} />
        <Col span={17}>
          <Card
            title={'排序和搜索算法'}
            extra={
              <span>
                <Icon type="clock-circle-o" />
                {' '}
                发表于 2017-02-25 By
                {' '}
                <Link href="/about" className={styles.link}>
                  Yin Feng
                </Link>
              </span>
            }
            style={{
              color: '#817c7c',
              paddingTop: 5,
              fontSize: 5,
              marginTop: 20,
            }}
            bodyStyle={{ color: '#413f3f', fontSize: 15 }}
          >
            <div dangerouslySetInnerHTML={{ __html: markdownString }} />
          </Card>
        </Col>
        <Col span={5}><Sidebar /></Col>
        <Col span={1} />
      </Row>
    );
  }
}

export default connect(state => {
  return {
    articles: state.article.articles,
  };
})(Article);
