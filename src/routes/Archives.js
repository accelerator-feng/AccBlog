import React from 'react';
import { connect } from 'dva';
import { Link, browserHistory } from 'dva/router';
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
    const { archiveList, archiveMap, status } = this.props;
    const archives = [];
    if (archiveMap) {
      for (const [url, info] of Object.entries(archiveMap)) {
        archives.push(
          <Link href={`/archives/${url}`} key={url} className={styles.link}>
            <p>{info.text} {`(${info.count})`}</p>
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
    const data = archiveList;
    return (
      <Row>
        <Col span={1} />
        <Col span={6}>
          <Card style={{ marginTop: 30, padding: '20px 20px 30px' }}>
            <div className={styles.title}>
              <Icon type="folder" />
              {' '}
              <span style={{ color: '#2ca6cb' }}>{status}</span>
            </div>
            <div className={styles.archivesList}>
              {archives}
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
            rowKey={record => record._id}
            onRowClick={record => {
              browserHistory.push(`/article/${record._id}`);
            }}
          />
        </Col>
        <Col span={1} />
      </Row>
    );
  }
}

export default connect(state => {
  return {
    archiveList: state.archive.archiveList,
    archiveMap: state.archive.archiveMap,
    status: state.archive.status,
  };
})(Archives);
