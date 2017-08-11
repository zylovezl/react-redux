
import React  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/*component*/
import Header from 'components/homeComponents/header';

export default class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div key={this.props.location}>
                <Header   linkTo="login"  linkToRegister="register"
                    handleClick={this.props.currentAnimate}

                />
            
            </div>
          )
    }
}
