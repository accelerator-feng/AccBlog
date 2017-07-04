import React from 'react';
import { Card, Icon, Button } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import MediaQuery from 'react-responsive';

import styles from './index.css';

function ArticleCard(props) {
  const { articles, loading } = props;
  return (
    <div>
      {articles.map(article => {
        return (
          <Card
            key={article._id}
            title={
              <Link to={`/article/${article._id}`} className={styles.link}>
                {article.title || 'loading...'}
              </Link>
            }
            loading={loading}
            extra={
              <MediaQuery query="(min-device-width:700px)">
                <span>
                  <Icon type="clock-circle-o" />
                  {' '}
                  发表于 {article.time || '2017-01-01'} By
                  {' '}
                  <Link to="/about" className={styles.link}>
                    {article.author || 'Yin Feng'}
                  </Link>
                </span>
              </MediaQuery>
            }
            style={{
              color: '#817c7c',
              paddingTop: 5,
              fontSize: 5,
              marginTop: 20,
            }}
            bodyStyle={{ color: '#413f3f', fontSize: 20 }}
          >
            <div className={styles.summary}>
              <div>{article.summary}</div>
              <Link to={`/article/${article._id}`}>
                <Button className={styles.btn}>
                  Read More
                </Button>
              </Link>
            </div>
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
                article.tags.length > 0 &&
                <span>
                  <Icon type="tags" style={{ color: '#ccc' }} />
                  {' '}
                  {article.tags.map((tag, i) => (
                    <Link key={i} className={styles.tag}>
                      {tag}{' '}
                    </Link>
                  ))}
                </span>}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default connect(state => {
  return {
    loading: state.loading.models.article,
  };
})(ArticleCard);
