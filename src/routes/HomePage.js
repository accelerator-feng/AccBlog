import React from 'react';
import { connect } from 'dva';
import { Card, Row, Col, Icon, Button, Pagination, Slider, Switch } from 'antd';
import { Link, browserHistory } from 'dva/router';
import MediaQuery from 'react-responsive';

import styles from './HomePage.css';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'article/fetch',
      payload: 1,
    });
  }
  handleChange = page => {
    browserHistory.push(`/page/${page}`);
    this.props.dispatch({
      type: 'article/fetch',
      payload: page,
    });
  };
  render() {
    const { articles } = this.props;
    const articleList = articles && articles.length > 0
      ? articles.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            extra={
              <span>
                <Icon type="clock-circle-o" />
                {' '}
                发表于 {article.time} By
                {' '}
                <Link href="/about">{article.name}</Link>
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
              <div>{article.content}</div>
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
              {article.category &&
                <span>
                  <Icon type="folder" />
                  {' '}
                  <Link>{article.category}</Link>&nbsp;&nbsp;
                </span>}
              {article.tags.length > 0 &&
                <span>
                  <Icon type="tags" />
                  {' '}
                  <Link>
                    {article.tags.map((tag, i) => <span key={i}>{tag} </span>)}
                  </Link>
                </span>}
            </div>
          </Card>
        ))
      : '这里没有博客';
    return (
      <Row>
        <Col span={1} />
        <MediaQuery query="(min-device-width:800px)">
          <Col span={17}>
            {articleList}
            <Pagination
              showQuickJumper
              defaultCurrent={1}
              defaultPageSize={5}
              total={20}
              onChange={this.handleChange}
              className={styles.pagination}
            />
          </Col>
          <Col span={5}>
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
                <Switch size="small" defaultChecked={false} /> 牵丝戏 - 银临/Aki阿杰
              </span>
              <Slider className={styles.slider} />
            </Card>
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
  };
})(HomePage);
