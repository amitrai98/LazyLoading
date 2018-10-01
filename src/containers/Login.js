import React, { Component } from 'react';
import {View} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from '../actions';
import LoginComponent from '../components/LoginComponent';
import LoginComponentStyle from '../styles/LoginComponentStyle';

class Login extends Component {
  
  constructor(props) {
    super(props);
  }

  /**
   * renders ui
   */
  render() {
    const { state, actions} = this.props;
    return (
      <View style={LoginComponentStyle.login_parent}>
      <LoginComponent
         payload={state.LoginReducer}
         {...actions}
        />
      </View>
    );
  }
}

/**
 * maps state with the props.
 * @param {state of app} state 
 */
function mapStateToProps(state) {
  return {
    state: state
  };
}

/**
 * Maps dispatcher to with props.
 * @param {action dispatcher} dispatch 
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions.actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
