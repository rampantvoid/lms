import {
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from 'react-native';
import { SCHEME } from '../utils/constants';

export const courseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SCHEME.backgroundColor,
    paddingHorizontal: 14,
    paddingTop: 20,
  },

  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },

  instructorLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
  },

  instructorLocationStyle: {
    color: 'white',
    fontSize: 10,
  },

  field: {
    marginTop: 25,
    width: '100%',
    gap: 10,
  },

  badge: {
    borderRadius: 12,
    width: 66,
    height: 26,
    backgroundColor: '#31B710',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },

  badgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
  },

  headingSecondary: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },

  courseText: {
    color: '#A9A9A9',
    fontSize: 13,
  },

  syllabusText: {
    color: 'white',
    fontSize: 9,
    flexWrap: 'wrap',
    marginLeft: 10,
  },

  syllabusContainer: {
    marginTop: 25,
    marginBottom: 20,

    width: '100%',
    gap: 10,
    backgroundColor: '#1C1C1C',

    paddingHorizontal: 20,
    paddingVertical: 24,
    borderRadius: 20,
  },

  durationScheduleContainer: {
    marginTop: 25,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  topicText: {
    flexWrap: 'wrap',
    marginLeft: 10,
    fontSize: 12,
    color: 'gray',
  },

  enrollBtn: {
    width: '100%',
    backgroundColor: '#0077E5',
    marginTop: 'auto',
    borderRadius: 5,
    paddingVertical: 10,
  },

  enrollText: {
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
});

export function courseImageProps(thumb: string): {
  style: StyleProp<ImageStyle>;
  source: ImageSourcePropType;
} {
  return {
    source: {
      uri: thumb,
      height: 251,
    },

    style: {
      width: '100%',
      borderRadius: 5,
    },
  };
}
