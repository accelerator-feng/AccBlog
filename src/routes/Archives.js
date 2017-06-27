import React from 'react';
import { connect } from 'dva';
import { Card, Row, Col, Icon, Table } from 'antd';

import styles from './Archives.css';

class Archives extends React.Component {
  componentDidMount() {
    document.title = '归档 | 和光同尘';
    NProgress.start();
    this.props.dispatch({
      type: 'archive/fetch',
      payload: { year: this.props.params.year, month: this.props.params.month },
    });
  }

  rowClassName = () => {
    return styles.row;
  };

  render() {
    const columns = [
      {
        title: 'Time',
        dataIndex: 'time',
        colSpan: 0,
        className: styles.time,
      },
      {
        title: 'Article',
        dataIndex: 'article',
        colSpan: 0,
        className: styles.article,
      },
    ];
    const data = [
      {
        key: '1',
        time: '2017-04-19',
        article: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        time: '2017-04-19',
        article: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        time: '2017-04-19',
        article: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        time: '2017-04-19',
        article: 'Sidney No. 1 Lake Park',
      },
      {
        key: '5',
        time: '2017-04-19',
        article: 'Sidney No. 1 Lake Park',
      },
      {
        key: '6',
        time: '2017-04-19',
        article: 'Sidney No. 1 Lake Park',
      },
    ];
    return (
      <Row>
        <Col span={1} />
        <Col span={6}>
          <Card style={{ marginTop: 30, padding: '20px 20px 30px' }}>
            <div className={styles.title}>
              <Icon type="folder" />
              {' '}
              <span style={{ color: '#2ca6cb' }}>归档</span>
            </div>
            <div className={styles.archivesList}>
              <p>2017 年 04 月 (1)</p>
              <p>2017 年 04 月 (1)</p>
              <p>2017 年 04 月 (1)</p>
              <p>2017 年 04 月 (1)</p>
            </div>
          </Card>
        </Col>
        <Col span={1} />
        <Col span={15}>
          <Table
            className={styles.table}
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 5 }}
            rowClassName={this.rowClassName}
          />
        </Col>
        <Col span={1} />
      </Row>
    );
  }
}

export default connect()(Archives);
