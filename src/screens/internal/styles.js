import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#232227',
  },
  boxTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  boxQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleButton: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  burgerDescription: {
    color: '#b2b2b2',
    fontWeight: '300',
    fontSize: 14,
    marginBottom: 20,
  },
  boxBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  orderNowText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  boxBagCircle: {
    backgroundColor: '#fff',
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeaderBottom: {
    color: 'white',
    fontWeight: '300',
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonOrderNow: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0B321',
    width: 150,
    height: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
    shadowColor: '#F0B321',
    shadowOffset: {width: 80, height: 60},
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 15,
  },
});

export default styles;
