import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Loader from '../utility/Loader'
import LoginComponentStyle from '../styles/LoginComponentStyle'
import Validator from '../utility/Validator'
import AppMsgConstants from '../utility/AppMsgConstants';




export default class LoginComponent extends Component {  

  constructor(props) {
    super(props);
  }
  
  /**
   * state to hold user inputs
   */
  state={
    email:'',
    password:'',
  }

  /**
   * attempts to log on the server
   */
  attemptLogin(){
    if(Validator.getInstance().isEmailValid(this.state.email)){
      if(Validator.getInstance().isPasswordValid(this.state.password)){
        this.props.apiLoginRequest({username: this.state.email, password: this.state.password});  
        setTimeout(() => {
            this.setState({loading:false});
        }, 2000);
      }else{
        alert(AppMsgConstants.PASSWORD_STRENGTH_ERROR)
      }      
    }else{
      alert(AppMsgConstants.EMAIL_ERROR);
    }     
  }
  
  /**
   * renders view to the user.
   */
  render() {
    const{payload} = this.props;
    return (      
      <View style={LoginComponentStyle.container}>
            <Loader loading={payload.isFetching} />
     
            <TextInput placeholder={"username"}
                    onChangeText={(value) => this.setState({ email: value })}
                    TextInput={"email"}
                    style={LoginComponentStyle.username_input}>
                </TextInput>
       

            <TextInput placeholder={"password"}
                    onChangeText={(value) => this.setState({ password: value })}
                    secureTextEntry={true}
                    style={LoginComponentStyle.password_input}>
                </TextInput>
                
        <TouchableOpacity onPress={() => this.attemptLogin()}
            >
            <Text style={LoginComponentStyle.login_button}>Login</Text>
        </TouchableOpacity>       
        <Text style={LoginComponentStyle.login_response_style}>{payload.apiMsg}</Text>
      </View>
    );
  }
}
