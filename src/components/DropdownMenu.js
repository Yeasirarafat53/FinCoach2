import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';

const DropdownMenu = () => {
  const [selectedValue, setSelectedValue] = useState('item1');

  return (
    <View>
      <Text>Select an item:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Item 1" value="item1" />
        <Picker.Item label="Item 2" value="item2" />
        <Picker.Item label="Item 3" value="item3" />
        <Picker.Item label="Item 4" value="item4" />
      </Picker>
    </View>
  );
};

export default DropdownMenu;