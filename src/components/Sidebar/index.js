import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import { Link } from 'dva/router';
import Music from '../Music';

class Sidebar extends React.Component {
  render() {
    const { categoryMap } = this.props;
    const categories = [];
    if (categoryMap) {
      for (const [category, mount] of Object.entries(categoryMap)) {
        categories.push(
          <Link href={`/categories/${category}`} key={category}>
            <p>{category} {`(${mount})`}</p>
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
      </div>
    );
  }
}

export default connect(state => {
  return {
    categoryMap: state.article.categoryMap,
  };
})(Sidebar);
