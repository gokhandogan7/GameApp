/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {StyleSheet, Dimensions} from 'react-native';

export const categoryModal = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    padding: 0,
    paddingHorizontal: 100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#000',
  },
  container: {
    height: Dimensions.get('window').height * 0.8,
    paddingTop: 5,
    backgroundColor: '#1976d2',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  categoryItemContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryItemText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const TimerStyle = StyleSheet.create({
  timer: {
    backgroundColor: '#3949ab',
    alignItems: 'center',
    margin:0
  },
});

export const questionItem = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#3949ab',
  },
  questionContainer: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#ffca28',
    margin: 10,
    padding: 20,
  },
  questionText: {
    color: 'white',
    fontSize: 30,
    // fontFamily: 'Ubuntu-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  trueButton: {
    backgroundColor: '#689f38',
    padding: 15,
    borderRadius: 10,
  },
  falseButton: {
    backgroundColor: '#d32f2f',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Pacifico-Regular',
  },
});
