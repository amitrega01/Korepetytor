import React from 'reactn';
import { Text, View } from 'react-native';
import Styles from '../consts/Styles';
export class CoachProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      user: this.global.user
    };
    let userID = this.props.navigation.getParam('userID', 'NO-ID');
    let data = {
      method: 'GET',
      credentials: 'same-origin',
      mode: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };
    var response = fetch(
      `https://ocofn1ofy2.execute-api.eu-west-1.amazonaws.com/dev/api/coach/${userID}`,
      data
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.state = {
          user: JSON.parse(json)
        };
      });
  }
  render() {
    return (
      <View style={Styles.wrapper}>
        <Text>
          {this.state.user.firstName} {this.state.user.lastName}
        </Text>
      </View>
    );
  }
}
export default CoachProfileScreen;
