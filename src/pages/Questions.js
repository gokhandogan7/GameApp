/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {QuestionItem} from '../components';

const Questions = props => {
  const listRef = useRef(null);
  const questionList = useSelector(state => state.questions);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderQuestion = ({item}) => (
    <QuestionItem questionObject={item} onAnswer={answer} />
  );

  const answer = result => {
    const newIndex = currentIndex + 1;
    if( newIndex === questionList.length)
    return props.navigation.navigate('Finish')
    listRef.current.scrollToIndex({index: newIndex});
    setCurrentIndex(newIndex);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          ref={listRef}
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
