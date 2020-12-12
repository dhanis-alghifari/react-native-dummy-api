import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const CallApiVanilla = () => {
  useEffect(() => {
    //   Call API Method Get
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <View>
      <Text>txxesdddt</Text>
    </View>
  );
};

export default CallApiVanilla;
