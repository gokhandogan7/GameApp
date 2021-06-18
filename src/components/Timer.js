/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Animated, View} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {TimerStyle} from './styles';

const Timer = (props) => (
  <View style={TimerStyle.timer}>
    <CountdownCircleTimer
      isPlaying={props.isPlaying}
      duration={5}
      onComplete={props.onComplete}
      colors={[
        ['#fff176', 0.4],
        ['#ba68c8', 0.4],
        ['#ff8a65', 0.2],
      ]}>
      {({remainingTime, animatedColor}) => (
        <Animated.Text style={{color: '#ba68c8', fontSize: 60}}>
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
  </View>
);

export {Timer};
