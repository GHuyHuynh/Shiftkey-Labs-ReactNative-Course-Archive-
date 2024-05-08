import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';
import Hello from './components/hello';

function App() {
  useDeviceContext(tw);

  return (
    <View style={tw`w-full h-100vh bg-blue-500`}>
      <SafeAreaView>
        <Text style={tw`text-center text-white`}>
          Example View III III
        </Text>

        <Hello />
      </SafeAreaView>
    </View>
  )
}

export default App;
