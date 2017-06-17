import React from 'react';
import { connect } from 'dva';
import { Row, Col, Carousel } from 'antd';

import Nav from '../components/Nav';

import styles from './IndexPage.css';
import carousel1 from '../assets/carousel_1.jpg';
import carousel2 from '../assets/carousel_2.jpg';
import carousel3 from '../assets/carousel_3.jpg';
import carousel4 from '../assets/carousel_4.jpg';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  setting = {
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    effect: 'fade',
  };

  render() {
    return (
      <div>
        <Nav /><Row>
          <Col span={3} />
          <Col span={12}>
            <Carousel {...this.setting} className={styles.carousel}>
              <img src={carousel1} alt="轮播图" />
              <img src={carousel2} alt="轮播图" />
              <img src={carousel3} alt="轮播图" />
              <img src={carousel4} alt="轮播图" />
            </Carousel>
            <Col span={6} />
            <Col span={3} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(IndexPage);
