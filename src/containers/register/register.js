/**
 * Created by Administrator on 2016/7/1.
 */
import React ,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//关于import什么时候用{}，什么时候不用大括号，通过那个插件或者组件是否包含default来判断，如果包含，则不需要{}

/*actions*/


/*component*/


/*files*/

/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state）
 * dispatch用法：（单个action）bindActionCreators(navActions, dispatch)，（多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */

export default class Register extends React.Component {
constructor(props) {
    super(props);
}

render() {
    return(
        <div>
          {2222}
        </div>
      )
}
}
