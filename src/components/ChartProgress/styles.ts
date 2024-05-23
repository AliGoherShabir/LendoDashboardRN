import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: '#ffffff',
  },
  container: {
    alignItems: 'center',
    // marginTop: 24,
  },
  chart: {
    // marginVertical: 8,
    borderRadius: 16,
  },
});
