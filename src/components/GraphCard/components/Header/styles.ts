import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../utils/responsiveScreens';

export default StyleSheet.create({
  topLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  largeTextContainer: {
    paddingTop: wp('3%'),
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: '#787381',
    fontSize: wp('4%'),
    fontWeight: '400',
    marginEnd: wp('2%'),
  },
  titleLarge: {
    fontSize: wp('7%'),
    fontWeight: '600',
    color: '#190044',
  },
  titleMedium: {
    fontSize: wp('5%'),
    fontWeight: '600',
    color: '#190044',
    paddingTop: wp('1.5%'),
    marginEnd: wp('2%'),
  },
});
