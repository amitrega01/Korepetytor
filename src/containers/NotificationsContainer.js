import React from 'reactn';
import { Text, View, StyleSheet } from 'react-native';
export class NotificationsContainer extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Twoje powiadomienia</Text>
      </View>
    );
  }
}
export default NotificationsContainer;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    width: '100%',
    alignItems: 'center'
  }
});
