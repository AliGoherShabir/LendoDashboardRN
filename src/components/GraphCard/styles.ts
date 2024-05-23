import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utils/responsiveScreens';

export default StyleSheet.create({
  container: {
    // height: wp('26%'),
    width: wp('88%'),
    alignSelf: 'center',
    marginTop: -wp('8%'),
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  label: {
    color: '#787381',
    fontSize: wp('4%'),
    fontWeight: '400',
    marginEnd: wp('2%'),
  },
  topLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainWalletLabelContainer: {
    padding: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: wp('0.3%'),
    borderTopColor: '#EDECEE',
  },
  largeTextContainer: {
    padding: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: wp('4.3%'),
    fontWeight: '600',
    color: '#190044',
  },
  titleLarge: {
    fontSize: wp('7%'),
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
    paddingVertical: wp('5%'),
  },
  generalDetailsStyle: {
    // alignItems: 'flex-end',
    // backgroundColor: 'red',
  },
  graphPointDetails: {
    // alignItems: 'flex-end',
    backgroundColor: '#F5F9FC',
    alignSelf: 'center',
    padding: wp('4%'),
  },
  loansText: {
    backgroundColor: '#EDECEE',
    borderRadius: 2.3,
    padding: 4,
  },
  loansTextStyle: {
    color: '#787381',
  },
  walletDetailsStyle: {
    alignItems: 'flex-end',
    minWidth: wp('40%'),
  },
  titleMedium: {
    fontSize: wp('5%'),
    fontWeight: '600',
    color: '#190044',
    paddingTop: wp('1.5%'),
    marginEnd: wp('2%'),
  },
});
