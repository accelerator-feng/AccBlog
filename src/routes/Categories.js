import React from 'react';
import { Card, Row, Col } from 'antd';
// import { connect } from 'dva';

export default class Archives extends React.Component {
  componentDidMount() {
    document.title = '分类 | 和光同尘';
  }
  render() {
    return (
      <Row>
        <Col span={1} />
        <Col span={4}>
          <Card style={{ width: 300, marginTop: 20 }}>
            <p>归档</p>
          </Card>
        </Col>
        <Col span={1} />
        <Col span={17} />
        <Col span={1} />
      </Row>
    );
  }
}
