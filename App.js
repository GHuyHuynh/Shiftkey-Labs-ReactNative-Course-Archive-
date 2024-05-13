import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import SingleNote from './components/SingleNote';

function App() {
  useDeviceContext(tw);

  return (
    <View style={tw`w-full h-100vh bg-blue-500`}>
      <SafeAreaView>
        <SingleNote />
      </SafeAreaView>
    </View>
  )
}

export default App;
