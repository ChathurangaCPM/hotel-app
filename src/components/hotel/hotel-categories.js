/* eslint-disable react/no-unstable-nested-components */
import React, {memo, useEffect, useState} from 'react';

import {Box, Text, Heading} from 'native-base';

import ListOfHotelCategories from '../../utils/hotel-categories.json';
import {ScrollView, TouchableOpacity, View} from 'react-native';

const HotelCategories = ({onSelected}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handlerSelect = selected => {
    if (selectedCategories.includes(selected)) {
      const filter = selectedCategories.filter(d => d !== selected);
      setSelectedCategories(filter);
    } else {
      setSelectedCategories(prevState => [...prevState, selected]);
    }
  };

  const HotelCategory = memo(({category}) => (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{marginRight: 10}}
      onPress={() => handlerSelect(category)}>
      <Box
        backgroundColor={
          selectedCategories.includes(category) ? 'primary.500' : 'muted.100'
        }
        p={3}
        borderRadius={10}>
        <Text
          color={selectedCategories.includes(category) ? 'white' : 'muted.700'}>
          {category}
        </Text>
      </Box>
    </TouchableOpacity>
  ));

  useEffect(() => {
    onSelected(selectedCategories);
  }, [onSelected, selectedCategories]);

  return (
    <View>
      <Heading pl={5} fontSize="md" mb={3}>
        Category
      </Heading>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}>
        {Object.entries(ListOfHotelCategories).map(([category], index) => (
          <HotelCategory key={index} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HotelCategories;
