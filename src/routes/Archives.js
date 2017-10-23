import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Card, Row, Col, Icon, Table } from 'antd';
import MediaQuery from 'react-responsive';

import styles from './Archives.scss';

class Archives extends React.Component {
  componentDidMount() {
    document.title = '归档 | 和光同尘';
  }

  rowClassName = () => {
    return styles.row;
  };

  render() {
    const { archiveList, archiveMap, title, loading } = this.props;
    const archives = [];
    if (archiveMap) {
      for (const [url, info] of Object.entries(archiveMap)) {
        archives.push(
          <Link
            to={`/archives/${url}`}
            key={url}
            activeStyle={{ color: '#ea6753' }}
          >
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
    const archiveCard = (
      <Card style={{ marginTop: 30, padding: '20px 20px 30px' }}>
        <div className={styles.title}>
          <Icon type="folder" />
          {' '}
          <span style={{ color: '#2ca6cb' }}>{title}</span>
        </div>
        <div className={styles.archivesList}>
          {archives}
        </div>
      </Card>
    );
    const tableCard = (
      <Table
        loading={loading}
        className={styles.table}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        rowClassName={this.rowClassName}
        rowKey={record => record._id}
        onRowClick={record => {
          this.props.dispatch({
            type: 'article/push',
            payload: `/article/${record._id}`,
          });
        }}
      />
    );
    return (
      <Row>
        <Col span={1} />
        <MediaQuery query="(min-device-width:800px)">
          <Col span={6}>
            {archiveCard}
          </Col>
          <Col span={1} />
          <Col span={15}>
            {tableCard}
          </Col>
        </MediaQuery>
        <MediaQuery query="(max-device-width:800px)">
          <Col span={22}>{archiveCard}{tableCard}</Col>
        </MediaQuery>
        <Col span={1} />
      </Row>
    );
  }
}

export default connect(state => {
  return {
    loading: state.loading.models.archive,
    archiveList: state.archive.archiveList,
    archiveMap: state.archive.archiveMap,
    title: state.archive.title,
  };
})(Archives);
