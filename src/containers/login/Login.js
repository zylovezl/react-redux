

 import React from 'react';
 import { bindActionCreators } from 'redux';
 import { connect } from 'react-redux';
 import PropTypes from 'prop-types';
 import * as login from 'actions/login';
import isEmpty from 'lodash/isEmpty';

 @connect (
     state => state,
     dispatch => bindActionCreators(login, dispatch)
 )

export default class Login extends React.Component {
constructor(props) {
    super(props);

    this.Click = (event) => {
      event.preventDefault();
        let user = this.refs.user.value;
        let psw = this.refs.psw.value;
        if (isEmpty(user)) {

          alert('用户名为空');
        }
        if (isEmpty(psw)) {
          alert('密码不能为空');
        }
        this.props.login_success(user,psw);
    }

}
render() {

     const {date} = this.props.login;

    return(
        <div>
          <form>
              <div>
              <span>用户名:</span>
              <input type='text' name='user' ref='user' placeholder='请输入用户名'/>
              </div>
              <div>
              <span>密码:</span>
              <input type='text' name='psw' placeholder='请输入密码' ref='psw'/>
              </div>
               <input  type='submit' onClick={this.Click} />



              <div>
              {date}
              </div>
          </form>

        </div>
      )
    }
}
/**
 *   用于显示后台state更新数据      初始设计reducer中state中last——time初始值为2，
   如果登陆成功则action中last_time值将更新state的值为1.
 */
