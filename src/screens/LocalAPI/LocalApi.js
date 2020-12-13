import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Alert,
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
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      position,
    };
    if (button === 'Simpan') {
      Axios.post('http://10.0.2.2:3004/users', data).then((res) => {
        console.log('res', res);
        setName('');
        setEmail('');
        setPosition('');
        getData();
      });
    } else if (button === 'Update') {
      Axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data).then(
        (res) => {
          console.log('res update', res);
          setName('');
          setEmail('');
          setPosition('');
          getData();
          setButton('Simpan');
        },
      );
    }
  };

  const getData = () => {
    Axios.get('http://10.0.2.2:3004/users').then((res) => {
      console.log('res', res.data);
      setUsers(res.data);
    });
  };

  const selectItem = (item) => {
    console.log('Selected user', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setPosition(item.position);
    setButton('Update');
  };

  const deleteItem = (item) => {
    console.log(item);
    Axios.delete(`http://10.0.2.2:3004/users/${item.id}`).then((res) => {
      console.log('res delete: ', res);
      getData();
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
        <Button title={button} onPress={submit} />
        <View style={styles.line} />
        {users.map((user) => {
          return (
            <ItemList
              key={user.id}
              name={user.name}
              email={user.email}
              position={user.position}
              onPress={() => selectItem(user)}
              onDelete={() =>
                Alert.alert(
                  'Peringatan',
                  'Anda yakin akan menghapus user ini?',
                  [
                    {text: 'Tidak', onPress: () => console.log('button tidak')},
                    {text: 'Ya', onPress: () => deleteItem(user)},
                  ],
                )
              }
            />
          );
        })}
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
