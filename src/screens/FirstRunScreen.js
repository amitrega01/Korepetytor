import React from 'reactn';
import { Text, View, FlatList } from 'react-native';

export class FirstRunScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.global.test}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    );
  }
}

export default FirstRunScreen;
