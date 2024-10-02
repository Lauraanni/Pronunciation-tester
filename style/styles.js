import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#87184b',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  generateButton: {
    marginBottom: 20,
    backgroundColor: '#87184b',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 40,
    fontWeight: 'normal',
    color: '#87184b',
    fontFamily: 'BebasNeue',
    marginBottom: 20
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  info: {
    marginBottom: 20,
    textAlign: 'center', 
  },
  randomWordText: {
    fontWeight: 'bold',
    fontSize: 18
  }
});


export default styles; 