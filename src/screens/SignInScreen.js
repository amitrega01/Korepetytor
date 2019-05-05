import React from 'reactn';
import {
  View,
  Text,
  Switch,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
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
    let data = {
      method: 'GET',
      credentials: 'same-origin',
      mode: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
    if (this.state.coach) {
      var response = fetch(
        `https://ocofn1ofy2.execute-api.eu-west-1.amazonaws.com/dev/api/coach/login?email=${
          this.state.email
        }&password=${this.state.password}`,
        data
      )
        .then(response => response.json())
        .then(json => {
          console.log(JSON.parse(json));
          this.setGlobal({
            user: JSON.parse(json)
          });
          this.props.navigation.navigate('CoachHome');
        });
    } else {
      var response = fetch(
        `https://ocofn1ofy2.execute-api.eu-west-1.amazonaws.com/dev/api/user/login?email=${
          this.state.email
        }&password=${this.state.password}`,
        data
      )
        .then(response => response.json())
        .then(json => {
          console.log(JSON.parse(json));
          this.setGlobal({
            user: JSON.parse(json)
          });
          this.props.navigation.navigate('StudentHome');
        });
    }
  };

  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);

    this.state = {
      email: 'amitrega01@gmail.com',
      password: 'insu1Haslo',
      coach: false
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
        <View style={Styles.row}>
          <Switch
            value={this.state.coach}
            onValueChange={() =>
              this.setState({
                coach: !this.state.coach
              })
            }
          />
          <Text>Jestem korepetytorem</Text>
        </View>
        <BlackButton
          title="Zaloguj"
          width={80 + '%'}
          onPress={() => {
            console.log(this.signIn());
          }}
          tintColor={'rgba(0,0,0,1)'}
        />
      </KeyboardAvoidingView>
    );
  }
}
export default SignInScreen;
