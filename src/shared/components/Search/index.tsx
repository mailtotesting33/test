import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {COLORS} from '../../theme/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RF} from '../../theme/responsive';
import SearchBarComp from '../SearchBar';
import {clearUsers, setUsers} from '../../redux/reducers/genralReducer';
import {debounce} from 'lodash';
import {getUsersThunk} from '../../redux/thunk/feed';

const Search = () => {
  const insets = useSafeAreaInsets();

  const [searchText, setSearchText] = useState('');

  const dispatch: any = useDispatch();
  const debounceSearch = useCallback(
    debounce((text: any) => {
      console.log('text', text);
      if (text == '') {
        dispatch(clearUsers());
        return;
      } else {
        dispatch(getUsersThunk({page: 1, search: text}));
      }
    }, 800),
    [],
  );

  const clear = () => {
    setSearchText('');
    dispatch(clearUsers());
  };
  const textChange = (text: any) => {
    if (text == '') {
      dispatch(setUsers([]));
      setSearchText('');
      return;
    } else {
      debounceSearch(text);
    }

    setSearchText(text);
  };
  useEffect(() => {
    return () => {
      debounceSearch.cancel();
    };
  }, [debounceSearch]);
  return (
    <View style={[styles.main, {paddingTop: insets.top}]}>
      <SearchBarComp
        value={searchText}
        onChangeText={textChange}
        clear={clear}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RF(20),
    backgroundColor: COLORS.PRIMARY,

    paddingVertical: RF(10),
  },
});

// export default Search;
export default React.memo(Search);
