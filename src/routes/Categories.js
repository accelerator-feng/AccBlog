import React from 'react';
import { connect } from 'dva';
import { Link, browserHistory } from 'dva/router';
import { Card, Row, Col, Icon, Table } from 'antd';
import MediaQuery from 'react-responsive';

import styles from './Categories.css';

class Categories extends React.Component {
  componentDidMount() {
    document.title = '分类 | 和光同尘';
    NProgress.start();
    this.props.dispatch({
      type: 'category/fetch',
      payload: { category: this.props.params.category || 'JavaScript' },
    });
  }

  rowClassName = () => {
    return styles.row;
  };

  render() {
    const { categoryList, categoryMap, title, loading } = this.props;
    const categories = [];
    if (categoryMap) {
      for (const [category, count] of Object.entries(categoryMap)) {
        categories.push(
          <Link
            href={`/categories/${category}`}
            key={category}
            className={styles.link}
          >
            {title === category
              ? <span style={{ color: '#ea6753' }}>
                  {category} {`(${count})`}
                </span>
              : <span>{category} {`(${count})`} </span>}
          </Link>,
        );
      }
    }
    const columns = [
      {
        title: 'Time',
        dataIndex: 'time',
        colSpan: 0,
        className: styles.time,
      },
      {
        title: 'Title',
        dataIndex: 'title',
        colSpan: 0,
        className: styles.article,
      },
    ];
    const data = categoryList;
    const categoryCard = (
      <Card style={{ marginTop: 30, padding: '20px 20px 30px' }}>
        <div className={styles.title}>
          <Icon type="folder" />
          {' '}
          <span style={{ color: '#2ca6cb' }}>{title}</span>
        </div>
        <div className={styles.categoriesList}>
          {categories}
        </div>
      </Card>
    );
    const tableCard = (
      <Table
        className={styles.table}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        loading={loading}
        rowClassName={this.rowClassName}
        rowKey={record => record._id}
        onRowClick={record => {
          browserHistory.push(`/article/${record._id}`);
        }}
      />
    );
    return (
      <Row>
        <Col span={1} />
        <MediaQuery query="(min-device-width:800px)">
          <Col span={6}>
            {categoryCard}
          </Col>
          <Col span={1} />
          <Col span={15}>
            {tableCard}
          </Col>
        </MediaQuery>
        <MediaQuery query="(max-device-width:800px)">
          <Col span={22}>{categoryCard}{tableCard}</Col>
        </MediaQuery>
        <Col span={1} />
      </Row>
    );
  }
}

export default connect(state => {
  return {
    loading: state.loading.models.category,
    categoryList: state.category.categoryList,
    categoryMap: state.category.categoryMap,
    title: state.category.title,
  };
})(Categories);
