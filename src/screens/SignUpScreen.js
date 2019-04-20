import React from 'reactn';
import { Text, KeyboardAvoidingView, TextInput } from 'react-native';

import BackButton from '../components/BackButton';
import BlackButton from '../components/BlackButton';
import Styles from '../consts/Styles';

export class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'amitrega01@gmail.com',
      password: 'insu1Haslo',
      passwordConfirm: 'insu1Haslo',
      firstName: 'Adam',
      lastName: 'Mitręga',
      accountType: 0
    };
  }

  static navigationOptions = {
    header: null
  };
  signUp = () => {
    if (this.state.password == this.state.passwordConfirm)
      if (this.state.password.length >= 8)
        if (this.state.email && this.state.firstName && this.state.lastName) {
          let user = {
            Email: this.state.email,
            Password: this.state.password,
            FirstName: this.state.firstName,
            LastName: this.state.lastName
          };
          let data = {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'same-origin',
            body: JSON.stringify(user),
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          };
          return fetch(
            'https://ocofn1ofy2.execute-api.eu-west-1.amazonaws.com/dev/api/user',
            data
          )
            .then(response => response.json()) // promise
            .then(json => {
              alert('Pomyślnie utworzono konto!');
              console.log(json);
              this.setGlobal({
                user: JSON.parse(json)
              });
              this.props.navigation.navigate('StudentHome');
            });
        }
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
        <BlackButton
          title="Zarejestruj"
          width={80 + '%'}
          onPress={() => {
            console.log(this.signUp());
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}
export default SignUpScreen;
