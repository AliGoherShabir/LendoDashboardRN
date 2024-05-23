import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../utils/responsiveScreens';

export default StyleSheet.create({
  listContainer: {
    flexGrow: 1,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainContainer: {backgroundColor: '#F5F9FC', flex: 1},
  headerContainerStyle: {
    backgroundColor: '#2DA5FE',
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    paddingTop: wp('4%'),
    paddingBottom: wp('12%'),
  },
  titleText: {
    fontSize: wp('3.9%'),
    fontWeight: '600',
    color: 'white',
  },
  subtitleText: {
    fontSize: wp('5%'),
    fontWeight: '600',
    color: 'white',
  },
  emptyText: {
    fontSize: 22,
    alignSelf: 'center',
    marginTop: '50%',
  },
});
