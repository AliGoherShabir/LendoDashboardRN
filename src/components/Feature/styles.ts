import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utils/responsiveScreens';

export default StyleSheet.create({
  featureContainer: {
    alignItems: 'center',
    padding: wp('4%'),
    marginHorizontal: wp('2%'),
    height: wp('26%'),
    width: wp('29%'),
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  iconContainer: {
    height: wp('12%'),
    width: wp('12%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
    backgroundColor: '#e6f7ff',
    marginBottom: wp('2%'),
  },
  icon: {
    width: wp('4.5%'),
    height: wp('4.5%'),
    tintColor: '#2C8BFD',
  },
  title: {
    fontSize: wp('3.2%'),
    fontWeight: '600',
    color: '#190044',
  },
});
