import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../utils/responsiveScreens';

export default StyleSheet.create({
  title: {
    fontSize: wp('4.3%'),
    fontWeight: '600',
    color: '#190044',
  },
  walletLabel: {
    color: '#787381',
    fontSize: wp('3.8%'),
    fontWeight: '400',
  },
  generalLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp('3%'),
    paddingVertical: wp('3%'),
  },
  generalDetailsStyle: {
    // alignItems: 'flex-end',
  },
});
