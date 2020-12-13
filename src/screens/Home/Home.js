import React from 'react';
import {View, Text} from 'react-native';
import CallApiAxios from '../CallApiAxios/CallApiAxios';
import CallApiVanilla from '../CallApiVanilla/CallApiVanilla';

const Home = () => {
  return (
    <View>
      <CallApiAxios />
    </View>
  );
};

export default Home;
