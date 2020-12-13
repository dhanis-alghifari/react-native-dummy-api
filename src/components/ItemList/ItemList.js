import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ItemList = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: 'https://ui-avatars.com/api/?background=0D8ABC&color=fff',
        }}
        style={styles.avatar}
      />
      <View style={styles.desc}>
        <Text style={styles.descName}>Nama Lengkap : </Text>
        <Text style={styles.descEmail}>Email : </Text>
        <Text style={styles.descPosisi}>Posisi : </Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  avatar: {width: 80, height: 80, borderRadius: 100},
  itemContainer: {flexDirection: 'row', marginBottom: 20},
  desc: {marginLeft: 18, flex: 1},
  descName: {fontSize: 20, fontWeight: 'bold'},
  descEmail: {fontSize: 16},
  descPosisi: {fontSize: 13, marginTop: 8},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});
