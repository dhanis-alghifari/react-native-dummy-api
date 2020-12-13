import React from 'react';
import {View, Text} from 'react-native';
import CallApiAxios from '../CallApiAxios/CallApiAxios';
import CallApiVanilla from '../CallApiVanilla/CallApiVanilla';
import LocalApi from '../LocalAPI/LocalApi';

const Home = () => {
  return (
    <View>
      <LocalApi />
    </View>
  );
};

export default Home;
