/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {QuestionItem} from '../components';

const Questions = (props) => {
  const questionList = useSelector((state) => state.questions);

  const renderQuestion = ({item}) => <QuestionItem questionObject={item} />;

  console.log(questionList);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          horizontal
          keyExtractor={(_, i) => i.toString()}
          data={questionList}
          renderItem={renderQuestion}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

export {Questions};
