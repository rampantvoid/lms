import { StyleSheet } from 'react-native';
import { SCHEME } from '../utils/constants';

export const commonStyles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: 'white',
    paddingLeft: 27,
    paddingRight: 27,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 5,
    paddingTop: 13,
    paddingBottom: 13,
  },
  heading: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
    width: '100%',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: SCHEME.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
