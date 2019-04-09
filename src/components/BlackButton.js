import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

export default class BlackButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.wrapper,
          { width: this.props.width ? this.props.width : 'auto' }
        ]}
        activeOpacity={0.6}
        onPress={this.props.onPress}
      >
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,1)',
    borderRadius: 25,
    paddingHorizontal: 24,
    paddingVertical: 12,
    margin: 8,
    elevation: 4
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
});
