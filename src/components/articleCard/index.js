import { Card, Icon, Button } from 'antd';
import { Link } from 'dva/router';

import styles from './index.css';

export default function ArticleCard(props) {
  const articles = props.articles;
  return (
    <div>
      {articles && articles.length > 0
        ? articles.map((article, index) => {
            const len = article._id.length;
            const id = article._id.slice(len - 3);
            return (
              <Card
                key={id}
                title={<Link href={`/article/${id}`}>{article.title}</Link>}
                extra={
                  <span>
                    <Icon type="clock-circle-o" />
                    {' '}
                    发表于 {article.time} By
                    {' '}
                    <Link href="/about">{article.author}</Link>
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
                <div className={styles['article-summary']}>
                  <div>{article.summary}</div>
                  <Link href={`/article/${id}`}>
                    <Button
                      style={{
                        background: '#ddd',
                        color: '#817c7c',
                        borderRadius: '14px',
                      }}
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
                <div className={styles['article-footer']}>
                  {article.category &&
                    <span>
                      <Icon type="folder" />
                      {' '}
                      <Link href={`/categories/${article.category}`}>
                        {article.category}
                      </Link>&nbsp;&nbsp;
                    </span>}
                  {article.tags.length > 0 &&
                    <span>
                      <Icon type="tags" />
                      {' '}
                      {article.tags.map((tag, i) => (
                        <Link key={i} href={`/tags/${tag}`}>
                          {tag}{' '}
                        </Link>
                      ))}
                    </span>}
                </div>
              </Card>
            );
          })
        : '这里没有博客'}
    </div>
  );
}
