import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../utils/responsiveScreens';

export default StyleSheet.create({
  walletLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  walletDetailsStyle: {
    alignItems: 'flex-end',
    minWidth: wp('40%'),
  },
  mainWalletLabelContainer: {
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: wp('0.3%'),
    borderTopColor: '#EDECEE',
  },
});
