import React from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Icon } from 'antd';
import { Link } from 'dva/router';
import MediaQuery from 'react-responsive';
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
    const { article, previous, next } = this.props;
    const main = (
      <div>
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
                    <Link key={i} href={`/tags/${tag}`} className={styles.tag}>
                      {tag}{' '}
                    </Link>
                  ))}
                </span>}
              <div className={styles.nav}>
                {previous &&
                  <Link
                    className={styles.previous}
                    href={`/article/${previous._id}`}
                  >
                    <strong>上一篇：</strong>
                    <div>
                      <Icon type="left" /> {previous.title}
                    </div>
                  </Link>}
                {next &&
                  <Link className={styles.next} href={`/article/${next._id}`}>
                    <strong>下一篇：</strong>
                    <div>
                      {next.title} <Icon type="right" />
                    </div>
                  </Link>}
              </div>
            </div>
          </Card>}
      </div>
    );
    return (
      <Row>
        <Col span={1} />
        <MediaQuery query="(min-device-width:800px)">
          <Col span={17}>{main}</Col>
          <Col span={5}><Sidebar /></Col>
        </MediaQuery>
        <MediaQuery query="(max-device-width:800px)">
          <Col span={22}>{main}</Col>
        </MediaQuery>
        <Col span={1} />
      </Row>
    );
  }
}

export default connect(state => {
  return {
    article: state.article.article,
    previous: state.article.previous,
    next: state.article.next,
  };
})(Article);
