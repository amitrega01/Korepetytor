import React from 'reactn';
import { Text, KeyboardAvoidingView, TextInput } from 'react-native';

import BackButton from '../components/BackButton';
import Styles from '../consts/Styles';

export class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: ''
    };
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <KeyboardAvoidingView style={Styles.wrapper} behavior="padding" enabled>
        <BackButton onPress={() => this.props.navigation.goBack(null)} />
        <Text style={Styles.title}>Rejestracja</Text>
        <TextInput
          placeholder="Adres email"
          style={Styles.textInput}
          keyboardType="email-address"
          value={this.state.email ? this.state.email : null}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          placeholder="Hasło"
          style={Styles.textInput}
          keyboardType="visible-password"
          value={this.state.password ? this.state.password : null}
          onChangeText={text => this.setState({ password: text })}
        />
        <TextInput
          placeholder="Powtórz hasło"
          style={Styles.textInput}
          keyboardType="visible-password"
          value={this.state.passwordConfirm ? this.state.passwordConfirm : null}
          onChangeText={text => this.setState({ passwordConfirm: text })}
        />
        <TextInput
          placeholder="Imię"
          style={Styles.textInput}
          keyboardType="default"
          value={this.state.firstName ? this.state.firstName : null}
          onChangeText={text => this.setState({ firstName: text })}
        />
        <TextInput
          placeholder="Nazwisko"
          style={Styles.textInput}
          keyboardType="default"
          value={this.state.lastName ? this.state.lastName : null}
          onChangeText={text => this.setState({ lastName: text })}
        />
      </KeyboardAvoidingView>
    );
  }
}
export default SignUpScreen;
