/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, {useState, useEffect} from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';
import {categoryModal} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategorySelectModal = (props) => {
  const [categoryList, setCategoryList] = useState([]);

  const fetchData = async () => {
    const {
      data: {trivia_categories},
    } = await axios.get("https://opentdb.com/api_category.php");
    setCategoryList(trivia_categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderList = ({item}) => {
    return (
      <TouchableOpacity
        style={categoryModal.categoryItemContainer}
        onPress={() => props.onCategorySelect(item)}>
        <Icon name="book" color="white" size={25} />
        <Text style={categoryModal.categoryItemText}>{item.name}</Text>
        </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visibility}
      style={categoryModal.modal}>
      <View style={categoryModal.container}>
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={categoryList}
          renderItem={renderList}
        />
        <Pressable
          style={[categoryModal.button, categoryModal.buttonClose]}
          onPress={() => props.onClose()}>
          <Text style={categoryModal.textStyle}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export {CategorySelectModal};
