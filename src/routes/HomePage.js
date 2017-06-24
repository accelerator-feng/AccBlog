import React from 'react';
import { connect } from 'dva';
import { Row, Col, Pagination } from 'antd';
import MediaQuery from 'react-responsive';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';

import styles from './HomePage.css';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'article/init',
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
            <Sidebar />
          </Col>
        </MediaQuery>
        <MediaQuery query="(max-device-width:800px)">
          <Col span={22}>
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
        </MediaQuery>
        <Col span={1} />
      </Row>
    );
  }
}

export default connect((state) => {
  return {
    articles: state.article.articles,
    total: state.article.total,
  };
})(HomePage);
