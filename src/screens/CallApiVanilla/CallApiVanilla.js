import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const CallApiVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });
  //   useEffect(() => {
  //     //   Call API Method Get
  //     fetch('https://reqres.in/api/users/2')
  //       .then((response) => response.json())
  //       .then((json) => console.log(json));

  //     //   Call API Method Post https://reqres.in/api/users
  //     const dataForApi = {
  //       name: 'morpheus',
  //       job: 'leader',
  //     };
  //     console.log('data object: ', dataForApi);
  //     console.log('data stringify: ', JSON.stringify(dataForApi));
  //     fetch('https://reqres.in/api/users', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(dataForApi),
  //     })
  //       .then((response) => response.json())
  //       .then((json) => console.log('post response', json));
  //   }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API Dengan Vanilla JS</Text>

      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DATA</Text>
      <Image
        source={dataUser.avatar ? {uri: dataUser.avatar} : null}
        style={styles.avatar}
      />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>

      <View style={styles.line} />
      <Button title="GET DATA" />
      <Text>Response GET DATA</Text>
    </View>
  );
};

export default CallApiVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
