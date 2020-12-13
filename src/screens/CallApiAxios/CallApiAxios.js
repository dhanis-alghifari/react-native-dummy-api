import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const CallApiAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });
  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  const getData = () => {
    Axios.get('https://reqres.in/api/users/2')
      .then((result) => {
        setDataUser(result.data.data);
      })
      .catch((err) => console.log('err : ', err));
  };

  const postData = () => {
    const dataForApi = {
      name: 'morpheus',
      job: 'leader',
    };

    Axios.post('https://reqres.in/api/users', dataForApi)
      .then((result) => {
        setDataJob(result.data);
      })
      .catch((err) => console.log('err :', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API Dengan Vanilla JS</Text>

      <Button title="GET DATA" onPress={getData} />
      <Text>Response GET DAATA</Text>
      <Image
        source={dataUser.avatar ? {uri: dataUser.avatar} : null}
        style={styles.avatar}
      />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>

      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallApiAxios;

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
