import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  wrapper: {
    paddingTop: 32,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7'
  },
  title: {
    fontSize: 42,
    fontWeight: '500',
    margin: 16
  },
  context: {
    fontSize: 24,
    margin: 48,
    textAlign: 'center'
  },
  textInput: {
    width: 80 + '%',
    padding: 8,
    textAlign: 'center',
    borderRadius: 16,
    borderColor: 'rgba(0,0,0,0.5)',
    borderWidth: 0.25,
    marginBottom: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerUser: {}
}));
