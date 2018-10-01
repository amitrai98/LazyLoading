import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator
} from "react-native";
import Loader from "../utility/Loader";
import LoginComponentStyle from "../styles/LoginComponentStyle";
import Validator from "../utility/Validator";
import AppMsgConstants from "../utility/AppMsgConstants";
import { Toolbar } from "react-native-material-ui";

export default class RepoSearch extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * state to hold user inputs
   */
  state = {
    email: "",
    password: ""
  };

  /**
   * attempts to log on the server
   */
  attemptLogin() {
    if (Validator.getInstance().isEmailValid(this.state.email)) {
      if (Validator.getInstance().isPasswordValid(this.state.password)) {
        this.props.apiLoginRequest({
          username: this.state.email,
          password: this.state.password
        });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 2000);
      } else {
        alert(AppMsgConstants.PASSWORD_STRENGTH_ERROR);
      }
    } else {
      alert(AppMsgConstants.EMAIL_ERROR);
    }
  }

  /**
   * search username
   * @param {username to be searched} search_text
   */
  text_to_be_searched(search_text) {}

  /**
   * renders view to the user.
   */
  render() {
    const { payload } = this.props;
    return (
      <Toolbar
        leftElement="menu"
        centerElement="Search Git"
        searchable={{
          autoFocus: true,
          placeholder: "Username",
          onChangeText: this.state.email,
          onSubmitEditing: this.state.password
        }}
        rightElement={{
          menu: {
            icon: "more-vert",
            labels: ["item 1", "item 2"]
          }
        }}
        onRightElementPress={label => {
          console.log(label);
        }}
      />
    );
  }
}
