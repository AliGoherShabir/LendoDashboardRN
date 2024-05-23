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
  graphPointDetails: {
    backgroundColor: '#F5F9FC',
    alignSelf: 'center',
    padding: wp('4%'),
    zIndex: 99,
  },
  loansText: {
    backgroundColor: '#EDECEE',
    borderRadius: 2.3,
    padding: 4,
  },
  loansTextStyle: {
    color: '#787381',
  },
});
