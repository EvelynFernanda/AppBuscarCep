import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  text: {
    marginTop: 60,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
  },
  input: {
    marginTop: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
  },
  botao: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#5E68D1',
  },
  botaoText: {
    textAlign: 'center',
    fontSize: 22,
    padding: 10,
    color: '#FFF',
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: '#FFF',
    fontSize: 22,
  },
});
export default styles;
