import React from 'reactn';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Styles from '../consts/Styles';
import NotificationsContainer from '../containers/NotificationsContainer';
import BlackButton from '../components/BlackButton';
export class CoachHomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    console.log('object');
    console.log(this.global.user);
  }

  render() {
    return (
      <View style={Styles.wrapper}>
        <View>
          <Text style={styles.helloText}>
            Witaj {this.global.user.firstName}!
          </Text>
          <TouchableOpacity
            style={styles.picPlaceholder}
            onPress={() =>
              this.props.navigation.navigate('CoachProfile', {
                userID: this.global.user.id
              })
            }
          />
        </View>
        <NotificationsContainer />
      </View>
    );
  }
}
export default CoachHomeScreen;

const styles = StyleSheet.create({
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(0,0,0,0.75)',
    margin: 8
  },
  picPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ddd',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.75)',
    elevation: 4,
    alignSelf: 'center',
    margin: 8
  }
});
