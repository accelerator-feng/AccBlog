import React from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Icon } from 'antd';
import { Link } from 'dva/router';
import MediaQuery from 'react-responsive';
import marked from 'marked';
import Sidebar from '../components/Sidebar';
import RichEditor from '../components/RichEditor';

import styles from './Article.css';

class Article extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'comment/fetch',
    });
  }
  render() {
    const { article, previous, next, loading, commentList } = this.props;
    const comments = commentList && commentList.length
      ? commentList.map(item => (
          <Card
            key={item._id}
            title={item.username}
            className={styles.comment}
            extra={
              <span>发布于<sapn style={{ marginLeft: 5 }}>{item.time}</sapn></span>
            }
          >
            <p dangerouslySetInnerHTML={{ __html: item.content }} />
          </Card>
        ))
      : '';
    const main = (
      <div>
        <Card
          title={
            <a className={`${styles.link} ${styles.title}`}>
              {article.title}
            </a>
          }
          loading={loading}
          extra={
            <MediaQuery query="(min-device-width:800px)">
              <span>
                <Icon type="clock-circle-o" />
                {' '}
                发表于 {article.time} By
                {' '}
                <Link to="/about" className={styles.link}>
                  {article.author}
                </Link>
              </span>
            </MediaQuery>
          }
          style={{
            color: '#817c7c',
            paddingTop: 5,
            fontSize: 5,
            marginTop: 20,
            marginBottom: 20,
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
                  to={`/categories/${article.category}`}
                  className={styles.category}
                >
                  {article.category}
                </Link>&nbsp;&nbsp;
              </span>}
            {article.tags &&
              <span>
                <Icon type="tags" style={{ color: '#ccc' }} />
                {' '}
                {article.tags.map((tag, i) => (
                  <Link key={i} className={styles.tag}>
                    {tag}{' '}
                  </Link>
                ))}
              </span>}
            <div className={styles.nav}>
              {previous &&
                <Link
                  className={styles.previous}
                  to={`/article/${previous._id}`}
                >
                  <strong>上一篇：</strong>
                  <div>
                    <Icon type="left" /> {previous.title}
                  </div>
                </Link>}
              {next &&
                <Link className={styles.next} to={`/article/${next._id}`}>
                  <strong>下一篇：</strong>
                  <div>
                    {next.title} <Icon type="right" />
                  </div>
                </Link>}
            </div>
          </div>
        </Card>
      </div>
    );
    return (
      <Row>
        <Col span={1} />
        <MediaQuery query="(min-device-width:500px)">
          <Col span={17}>{main}{comments}<RichEditor /></Col>
          <Col span={5}><Sidebar /></Col>
        </MediaQuery>
        <MediaQuery query="(max-device-width:500px)">
          <Col span={22}>
            {main}{comments}<RichEditor /><Sidebar width="100%" />
          </Col>
        </MediaQuery>
        <Col span={1} />
      </Row>
    );
  }
}

export default connect(state => {
  return {
    loading: state.loading.models.article,
    article: state.article.article,
    previous: state.article.previous,
    next: state.article.next,
    commentList: state.comment.commentList,
  };
})(Article);
