import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';

const Hello = () => {
  return (
    <>
      <Text style={tw`text-center text-white`}>
        Testing 123
      </Text>
    </>
  )
}

export default Hello