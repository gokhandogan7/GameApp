/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Animated, View} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {TimerStyle} from './styles';

const Timer = (props) => (
  <View style={TimerStyle.timer}>
    <CountdownCircleTimer
    size={120}
    trailStrokeWidth={0}
    strokeWidth={8}
      isPlaying={props.isPlaying}
      duration={props.time}
      onComplete={props.onComplete}
      colors={[
        ['#fff176', 0.4],
        ['#ba68c8', 0.4],
        ['#ff8a65', 0.2],
      ]}>
      {({remainingTime, animatedColor}) => (
        <Animated.Text style={{fontFamily:"Pacifico-Regular", color: '#ba68c8', fontSize: 50, marginBottom:18}}>
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
  </View>
);

export {Timer};
