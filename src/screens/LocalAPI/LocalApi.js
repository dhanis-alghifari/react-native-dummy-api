import Axios from 'axios';
import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ItemList from '../../components/ItemList/ItemList';

const LocalApi = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const submit = () => {
    const data = {
      name,
      email,
      position,
    };
    console.log('data besofre send', data);
    Axios.post('http://10.0.2.2:3004/users', data).then((res) => {
      console.log('res', res);
      setName('');
      setEmail('');
      setPosition('');
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textTitle}>Local API (JSON Server)</Text>
        <Text>Masukkan Anggota Klub</Text>
        <TextInput
          placeholder="Nama Lengkap"
          style={styles.input}
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          placeholder="Bidang"
          style={styles.input}
          value={position}
          onChangeText={(value) => setPosition(value)}
        />
        <Button title="Simpan" onPress={submit} />
        <View style={styles.line} />
        <ItemList />
        <ItemList />
        <ItemList />
      </ScrollView>
    </View>
  );
};

export default LocalApi;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 20},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
});
