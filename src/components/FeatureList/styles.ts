import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utils/responsiveScreens';

export default StyleSheet.create({
  header: {
    fontSize: wp('4.8%'),
    fontWeight: '600',
    marginTop: wp('4%'),
    marginHorizontal: wp('6%'),
    marginBottom: wp('4.8%'),
    color: '#4b4b4b',
  },
  container: {
    marginBottom: wp('8%'),
  },
});
