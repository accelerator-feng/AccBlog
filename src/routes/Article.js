import React from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Icon } from 'antd';
import { Link } from 'dva/router';
import marked from 'marked';
import Sidebar from '../components/Sidebar';

import styles from './Article.css';

class Article extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'article/show',
      payload: this.props.params.id,
    });
  }

  render() {
    const { article } = this.props;
    return (
      <Row>
        <Col span={1} />
        <Col span={17}>
          {article &&
            <Card
              title={
                <a className={`${styles.link} ${styles.title}`}>
                  {article.title}
                </a>
              }
              extra={
                <span>
                  <Icon type="clock-circle-o" />
                  {' '}
                  发表于 {article.time} By
                  {' '}
                  <Link href="/about" className={styles.link}>
                    {article.author}
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
              <div className={styles.summary}>{article.summary}</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(`${article.content}`.replace(/<br>/g, '\n'), {
                    sanitize: true,
                    breaks: true,
                    smartypants: true,
                    highlight: code => hljs.highlightAuto(code).value,
                  }),
                }}
                className={styles.content}
              />
              <div className={styles.footer}>
                {article.category &&
                  <span>
                    <Icon type="folder" style={{ color: '#ccc' }} />
                    {' '}
                    <Link
                      href={`/categories/${article.category}`}
                      className={styles.category}
                    >
                      {article.category}
                    </Link>&nbsp;&nbsp;
                  </span>}
                {article.tags.length > 0 &&
                  <span>
                    <Icon type="tags" style={{ color: '#ccc' }} />
                    {' '}
                    {article.tags.map((tag, i) => (
                      <Link
                        key={i}
                        href={`/tags/${tag}`}
                        className={styles.tag}
                      >
                        {tag}{' '}
                      </Link>
                    ))}
                  </span>}
              </div>
            </Card>}
        </Col>
        <Col span={5}><Sidebar /></Col>
        <Col span={1} />
      </Row>
    );
  }
}

export default connect(state => {
  return {
    article: state.article.article,
  };
})(Article);
