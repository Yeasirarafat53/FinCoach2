import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const Table = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [inputs, setInputs] = useState('');

  const handleSubmit = () => {
    setData([...data, { key: Math.random().toString(), value: input }]);
    setInput('');
    setInputs('');
  }

  const handleDelete = (item) => {
    setData(data.filter(i => i.key !== item.key));
  }

  const handleEdit = (item) => {
    setInput(item.value);
    handleDelete(item);
  }

  return (
    <View style={{ backgroundColor: "black" }}>
      <View>

        <TextInput
          value={input}
          onChangeText={text => setInput(text)}
          placeholder="Enter data"
        />

        <TextInput
          value={inputs}
          onChangeText={text => setInputs(text)}
          placeholder="Enter MAIL"
        />

        <TouchableOpacity onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>{item.value}</Text>
            <TouchableOpacity onPress={() => handleDelete(item)}>
              <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleEdit(item)}>
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default Table;
