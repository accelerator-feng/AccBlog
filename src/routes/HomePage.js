import React from 'react';
import { connect } from 'dva';
import { Card, Row, Col, Pagination } from 'antd';
import { Link } from 'dva/router';
import MediaQuery from 'react-responsive';
import ArticleCard from '../components/ArticleCard';
import Music from '../components/Music';

import styles from './HomePage.css';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'article/fetch',
      payload: 1,
    });
  }
  handleChange = page => {
    this.props.dispatch({
      type: 'article/fetch',
      payload: page,
    });
  };
  render() {
    const { articles, total } = this.props;
    return (
      <Row>
        <Col span={1} />
        <MediaQuery query="(min-device-width:800px)">
          <Col span={17}>
            <ArticleCard articles={articles} />
            <Pagination
              showQuickJumper
              defaultCurrent={1}
              defaultPageSize={5}
              total={total}
              onChange={this.handleChange}
              className={styles.pagination}
            />
          </Col>
          <Col span={5}>
            <Music />
            <Card
              title="分类"
              extra={<Link href="/categories">More</Link>}
              style={{
                width: '90%',
                float: 'right',
                marginTop: 20,
                padding: 10,
              }}
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
              style={{
                width: '90%',
                float: 'right',
                marginTop: 20,
                padding: 10,
              }}
              bordered={false}
              bodyStyle={{ margin: '10px 0 0 10px' }}
            >
              <Link><p>Card content</p></Link>
              <Link><p>Card content</p></Link>
              <Link><p>Card content</p></Link>
            </Card>
            <Card
              title="友情链接"
              style={{
                width: '90%',
                float: 'right',
                marginTop: 20,
                padding: 10,
              }}
              bordered={false}
              bodyStyle={{ margin: '10px 0 0 10px' }}
            >
              <Link><p>Card content</p></Link>
              <Link><p>Card content</p></Link>
              <Link><p>Card content</p></Link>
            </Card>
          </Col>
        </MediaQuery>
        <Col span={1} />
      </Row>
    );
  }
}

export default connect(state => {
  return {
    articles: state.article.articles,
    total: state.article.total,
  };
})(HomePage);
