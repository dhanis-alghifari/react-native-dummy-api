import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ItemList = ({name, email, position, onPress}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: `https://ui-avatars.com/api/?name=${name}`,
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descPosisi}>{position} </Text>
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
