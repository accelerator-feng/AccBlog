import React from 'react';
import { Card, Icon, Button } from 'antd';
import { Link } from 'dva/router';
import MediaQuery from 'react-responsive';

import styles from './index.css';

export default function ArticleCard(props) {
  const articles = props.articles;
  return (
    <div>
      {articles &&
        articles.map(article => {
          return (
            <Card
              key={article._id}
              title={
                <Link href={`/article/${article._id}`} className={styles.link}>
                  {article.title}
                </Link>
              }
              extra={
                <MediaQuery query="(min-device-width:700px)">
                  <span>
                    <Icon type="clock-circle-o" />
                    {' '}
                    发表于 {article.time} By
                    {' '}
                    <Link href="/about" className={styles.link}>
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
              }}
              bodyStyle={{ color: '#413f3f', fontSize: 20 }}
            >
              <div className={styles.summary}>
                <div>{article.summary}</div>
                <Link href={`/article/${article._id}`}>
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
            </Card>
          );
        })}
    </div>
  );
}
