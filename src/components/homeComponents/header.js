
import React ,{Component} from 'react';
import { Link } from 'react-router-dom';

class  Header  extends React.Component {


  render() {
      const {  linkToRegister,  linkTo  } = this.props
      return (

          <div >
              <Link to={linkTo} className="login" >登陆
              </Link>

              <Link to={linkToRegister} className="register" >注册
              </Link>
          </div>


      )
  }

}

export  default  Header;
