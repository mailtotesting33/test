import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import genralReducer from './reducers/genralReducer';



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user','workout'],
};

const reducers = combineReducers({
  genral: genralReducer,

});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store: any = configureStore({
  reducer: {
    root: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
