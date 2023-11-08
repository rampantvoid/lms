import { StyleSheet } from 'react-native';
import { SCHEME } from '../utils/constants';

export const listingStyles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%',
    gap: 20,
  },

  card: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: SCHEME.cardBorder,
    borderWidth: 1,
    padding: 8,
    paddingBottom: 15,
  },

  cardImage: {
    height: 170,
    borderRadius: 8,
  },

  cardBottom: {
    paddingLeft: 4,
    paddingRight: 4,
  },

  cardTitle: {
    color: 'white',
    marginTop: 15,
    fontWeight: '500',
    fontSize: 15,
  },

  cardDescription: {
    marginTop: 10,
    textAlign: 'justify',
    color: 'gray',
    height: 70,
  },

  instructor: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },

  cardFooter: {
    marginTop: 10,
  },
});

export const screenOptions = (title: string) => ({
  headerShown: true,
  headerStyle: {
    backgroundColor: '#141414',
  },
  headerTintColor: 'white',
  title,
  contentStyle: {
    borderTopColor: '#343a40',
    borderTopWidth: 0.5,
  },
});
