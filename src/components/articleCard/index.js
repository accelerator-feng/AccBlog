import { Card, Icon, Button } from 'antd';
import { Link } from 'dva/router';

import styles from './index.css';

export default function ArticleCard(props) {
  const articles = props.articles;
  return (
    <div>
      {articles && articles.length > 0
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
                      {article.tags.map((tag, i) => (
                        <span key={i}>{tag} </span>
                      ))}
                    </Link>
                  </span>}
              </div>
            </Card>
          ))
        : '这里没有博客'}
    </div>
  );
}
