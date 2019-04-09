import React from 'reactn';
import { Text, KeyboardAvoidingView, TextInput } from 'react-native';
import BackButton from '../components/BackButton';
import BlackButton from '../components/BlackButton';
import Styles from '../consts/Styles';

export class SignInScreen extends React.Component {
  signIn = () => {
    console.log('LOGOWANIE');
    console.log(
      `https://localhost:80/api/users/login?email=${
        this.state.email
      }&password=${this.state.password}`
    );
    var response = `{
      "Id": "387a394c-a28b-400f-a585-d20a77594a3a",
      "Email": "amitrega0@gmail.com",
      "Password": "insu1Haslo",
      "FirstName": "Adam",
      "LastName": "Mitręga",
      "AccountType": 1
    }`;
    var user = JSON.parse(response);
    this.setGlobal({ user: user });
    if (user.AccountType == 0) {
      this.props.navigation.navigate('StudentHome');
    } else {
      this.props.navigation.navigate('CoachHome');
    }
  };

  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);

    this.state = {
      email: 'amitrega01@gmail.com',
      password: 'insu1Haslo'
    };
  }
  render() {
    return (
      <KeyboardAvoidingView style={Styles.wrapper} behavior="padding" enabled>
        <BackButton onPress={() => this.props.navigation.goBack(null)} />
        <Text style={Styles.title}>Logowanie</Text>
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
        <BlackButton
          title="Zaloguj"
          width={80 + '%'}
          onPress={() => {
            console.log(this.signIn());
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}
export default SignInScreen;
