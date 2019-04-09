import React from 'reactn';
import { Text, View } from 'react-native';
export class StudentHomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Text>STUDENT</Text>
        <Text>{JSON.stringify(this.global.user)}</Text>
      </View>
    );
  }
}
export default StudentHomeScreen;
