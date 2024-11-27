import {Provider} from 'react-redux';
import {persistor, store} from './src/shared/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/shared/services/nav.services';
import Routes from './src/routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { initialConfig } from './src/shared/utils/config';
import { LogBox } from 'react-native';

const App = () => {
  useEffect(()=>{
    initialConfig();
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();
  },[])
  return (
    <>
     <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer ref={navigationRef}>
              <Routes />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
