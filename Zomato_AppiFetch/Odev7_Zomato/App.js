import React from 'react';
import {
  SafeAreaView,
} from 'react-native';

import Zomato from './Zomato';


const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <Zomato/>
      </SafeAreaView>
  );
};

export default App;
