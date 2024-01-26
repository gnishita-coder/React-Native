import React from 'react';
import { View } from 'react-native';
import ListView from './ListView'; // Update the import path based on your project structure

const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const App = () => {
  return (
    <View>
      <ListView data={data} />
    </View>
  );
};

export default App;
