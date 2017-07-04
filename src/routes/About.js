import React from 'react';
import { Card, Row, Col } from 'antd';
import { connect } from 'dva';
import MediaQuery from 'react-responsive';
import marked from 'marked';
import SideBar from '../components/Sidebar';

class Archives extends React.PureComponent {
  componentDidMount() {
    document.title = '关于 | 和光同尘';
    this.props.dispatch({
      type: 'article/init',
    });
  }
  render() {
    const markdownString =
      '# 个人信息<br>- 尹锋/男/1996 <br>- 本科/中南大学 <br>- Email: acceleratorfeng@gmail.com<br>- QQ: 619772719<br>- 个人网站: [http://yinfengblog.com/](http://yinfengblog.com/)<br>- Github: [https://github.com/accelerator-feng](https://github.com/accelerator-feng)<br><br># 技能清单<br>掌握 **HTML5 / CSS3** 新特性,做到响应式布局和各主流浏览器适配<br>熟悉 ECMAScript (JavaScript) ,理解原型链、继承、闭包等概念<br>熟悉 **ES6** 新标准与相关后处理工具并能在项目中使用新特性<br>了解常用**设计模式**，如单例模式、观察者模式等<br>能使用**Gulp**、**Webpack** 实现项目自动化构建和模块化。熟练使用CSS预处理工具 **Sass**<br>熟练使用 **jQuery** (DOM,事件,Ajax)，了解**Vue.js**<br>掌握 **前端性能优化** 方面的知识<br><br>## 个人项目<br>*所有项目独立完成*<br><br> - [待办事项Web应用](http://yinfengblog.com/TodoList/) [[源码](https://github.com/accelerator-feng/TodoList)] : 使用jQuery，通过localStorage实现本地读取与存储，具有增查删改、定时、响铃提醒等功能。兼容主流浏览器及移动设备<br> - [模态框组件](http://yinfengblog.com/Acc-msg-component/) [[源码](https://github.com/accelerator-feng/Acc-msg-component)] : ES6构建的模态框组件。设计了统一生命周期的Widget抽象类，使用观察者模式使之可绑定多个回调函数。可自定义位置皮肤等各种参数，支持拖动功能。支持AMD，ES6模块引入以及全局引入<br> - [Simon Game](http://yinfengblog.com/Simon-Game/) [[源码](https://github.com/accelerator-feng/Simon-Game)] : 一个测试记忆力的游戏，展示一系列的灯和音调且让用户重复，难度递增且支持两种模式。通过封装和解耦使逻辑复杂的代码结构清晰，增强可读性<br> - [Tic-Tac-Toe](http://yinfengblog.com/Tic-Tac-Toe/) [[源码](https://github.com/accelerator-feng/Tic-Tac-Toe)] : 一个支持人机对战的井字棋游戏。设计的游戏AI考虑了所有可能的对局情况，可保证玩家无法战胜AI<br> - [freeCodeCamp](https://freecodecamp.cn/accelerator-feng) : 完成了freeCodeCamp(Github | star 第一开源社区)前端所有的编程练习与项目<br><br>## 技术文章<br>有自己的技术博客，长期更新学习笔记，不断总结学习心得<br><br>- [学习跨域请求解决方案(CORS、JSONP)](http://yinfengblog.com/学习前端跨域解决方案/)<br>- [理解词法作用域与闭包](http://yinfengblog.com/理解词法作用域与闭包/) <br><br>## 自我评价<br>爱逛技术论坛，关注优秀的前端博客。喜欢在前端社区与他人交流分享，相互学习<br>善于使用 google 搜索资料，解决技术难题。懂得合理地提出问题以及向他人描述技术问题<br>善于将工作进行切分，并充分利用时间并行地去完成他们<br>具备阅读英文技术文档的能力<br><br>';
    const Resume = (
      <Card style={{ marginTop: 20 }}>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(markdownString.replace(/<br>/g, '\n'), {
              sanitize: true,
              breaks: true,
              smartypants: true,
            }),
          }}
          style={{ padding: 40, fontSize: 15 }}
        />
      </Card>
    );
    return (
      <Row>
        <Col span={1} />
        <MediaQuery query="(min-device-width:800px)">
          <Col span={17}>
            {Resume}
          </Col>
          <Col span={5}><SideBar /></Col>
        </MediaQuery>
        <MediaQuery query="(max-device-width:800px)">
          <Col span={22}>
            {Resume}
          </Col>
        </MediaQuery>
        <Col span={1} />
      </Row>
    );
  }
}

export default connect()(Archives);
