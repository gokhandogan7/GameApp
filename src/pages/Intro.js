/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {introPage} from './styles';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {CategorySelectModal, Timer} from '../components';

const Intro = (props) => {
  const [modalFlag, setModalFlag] = useState(false);
  const [counterFlag, setCounterFlag] = useState(false);
  const dispatch = useDispatch();

  const startGame = (selectCategory) => {
    axios
      .get(`https://opentdb.com/api.php?`, {
        params: {
          amount: 10,
          category: selectCategory.id,
          type: 'boolean',
        },
      })
      .then(response => {
        const {
          data : {results : questions}, 
        } = response;
        dispatch({ type: "SET_QUESTIONS", payload: { questions } })
      })

    setModalFlag(false);
    setCounterFlag(true);
  };

  return (
    <View style={{flex: 1}}>
      <View style={introPage.container}>
        <Text style={introPage.bannerText}>Trivia!</Text>
      </View>
      <Timer
        isPlaying={counterFlag}
        onComplete={() => props.navigation.navigate('Questions')}
      />
      <View style={introPage.container}>
        <TouchableOpacity
          style={introPage.buttonContainer}
          onPress={() => setModalFlag(true)}>
          <Text style={introPage.buttonText}>Start!</Text>
        </TouchableOpacity>
      </View>

      <CategorySelectModal
        visibility={modalFlag}
        onClose={() => setModalFlag(false)}
        onCategorySelect={startGame}
      />
    </View>
  );
};
export {Intro};
