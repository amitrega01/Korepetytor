import React from 'reactn';
import { Text, View } from 'react-native';
import BlackButton from '../components/BlackButton';
import Styles from '../consts/Styles';

export class FirstRunScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={Styles.wrapper}>
        <Text style={Styles.title}>Korepetytor</Text>
        <Text style={Styles.context}>
          Szukaj korepetycji online w prosty i szybki sposób
        </Text>
        <BlackButton
          title="Mam już konto"
          onPress={() => {
            console.log('BTN > SIGN IN');
            this.props.navigation.navigate('FirstRun');
          }}
          width={250}
        />
        <BlackButton
          title="Chcę utworzyć konto"
          onPress={() => {
            console.log('BTN > SIGN UP');
            this.props.navigation.navigate('SignUp');
          }}
          width={250}
        />
      </View>
    );
  }
}

export default FirstRunScreen;
