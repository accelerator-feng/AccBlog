import React from 'react';
import { connect } from 'dva';
import { Card, Calendar } from 'antd';
import { Link } from 'dva/router';

import styles from './index.css';

class Sidebar extends React.Component {
  getMonthData = value => {
    if (value.year() === 2017 && (value.month() === 7 || value.month() === 6)) {
      return '蚂蚁实习';
    }
    if (value.year() === 2017 && value.month() === 8) {
      return '秋季校招';
    }
  };
  monthCellRender = value => {
    const plan = this.getMonthData(value);
    return plan
      ? <div style={{ textAlign: 'center' }}>
          <section>{plan}</section>
        </div>
      : null;
  };

  render() {
    const { categoryMap, archiveMap, linkMap, width = '90%' } = this.props;
    const categories = [];
    if (categoryMap) {
      for (const [category, count] of Object.entries(categoryMap)) {
        categories.push(
          <Link
            to={`/categories/${category}`}
            key={category}
            className={styles.link}
          >
            <p>{category} {`(${count})`}</p>
          </Link>,
        );
      }
    }
    const archives = [];
    if (archiveMap) {
      for (const [url, info] of Object.entries(archiveMap)) {
        archives.push(
          <Link to={`/archives/${url}`} key={url} className={styles.link}>
            <p>{info.text} {`(${info.count})`}</p>
          </Link>,
        );
      }
    }
    return (
      <div>
        <div
          style={{
            width,
            border: '1px solid #fff',
            borderRadius: 4,
            float: 'right',
            marginTop: 20,
            background: '#fff',
          }}
        >
          <Calendar
            fullscreen={false}
            monthCellRender={this.monthCellRender}
            mode="year"
          />
        </div>
        <Card
          title="分类"
          extra={<Link to="/categories">More</Link>}
          style={{
            width,
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
          extra={<Link to="/archives">More</Link>}
          style={{
            width,
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
            width,
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

export default connect(state => {
  return {
    categoryMap: state.article.categoryMap,
    archiveMap: state.article.archiveMap,
    linkMap: state.article.linkMap,
  };
})(Sidebar);
