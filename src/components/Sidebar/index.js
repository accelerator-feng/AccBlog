import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import { Link } from 'dva/router';
import Music from '../Music';

import styles from './index.css';

class Sidebar extends React.Component {
  render() {
    const { categoryMap, archiveMap, linkMap } = this.props;
    const categories = [];
    if (categoryMap) {
      for (const [category, mount] of Object.entries(categoryMap)) {
        categories.push(
          <Link
            href={`/categories/${category}`}
            key={category}
            className={styles.link}
          >
            <p>{category} {`(${mount})`}</p>
          </Link>,
        );
      }
    }
    const archives = [];
    if (archiveMap) {
      for (const [archive, mount] of Object.entries(archiveMap)) {
        archives.push(
          <Link
            href={`/archives/${archive}`}
            key={archive}
            className={styles.link}
          >
            <p>{archive} {`(${mount})`}</p>
          </Link>,
        );
      }
    }
    return (
      <div>
        <Music />
        <Card
          title="分类"
          extra={<Link href="/categories">More</Link>}
          style={{
            width: '90%',
            float: 'right',
            marginTop: 20,
            padding: '0 10px 10px',
          }}
          bordered={false}
          bodyStyle={{ margin: '10px 0 0 10px' }}
        >
          {categories}
        </Card>
        <Card
          title="归档"
          extra={<Link href="/archives">More</Link>}
          style={{
            width: '90%',
            float: 'right',
            marginTop: 20,
            padding: 10,
          }}
          bordered={false}
          bodyStyle={{ margin: '10px 0 0 10px' }}
        >
          {archives}
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
          {linkMap &&
            linkMap.map((item, index) => (
              <a
                href={item.url}
                key={index}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{item.title}</p>
              </a>
            ))}
        </Card>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    categoryMap: state.article.categoryMap,
    archiveMap: state.article.archiveMap,
    linkMap: state.article.linkMap,
  };
})(Sidebar);
