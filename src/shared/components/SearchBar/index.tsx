import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Pressable} from 'react-native';
import {CloseSvg, SearchSvg} from '../../../assets/svg';
import {RF} from '../../theme/responsive';

const SearchBarComp = ({
    onChangeText,
  value = '',
  clear = () => {},
  search = () => {},
  ...rest
}: any) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={4} onPress={search}>
        <SearchSvg />
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      {value != '' && (
        <Pressable hitSlop={4} onPress={clear}>
          <CloseSvg />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingHorizontal: RF(5),
  },
});

export default SearchBarComp;
