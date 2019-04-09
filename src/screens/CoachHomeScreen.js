import React from 'reactn';
import { Text, View } from 'react-native';
export class CoachHomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Text>COACH</Text>
        <Text>{JSON.stringify(this.global.user)}</Text>
      </View>
    );
  }
}
export default CoachHomeScreen;
