import React from 'react';
import {SafeAreaView} from 'react-native';
import RandomGradient from './Component/RandomGradient';

const App = () => {
  return (
    <SafeAreaView>
      <RandomGradient name={'green'}/>
    </SafeAreaView>
  );
};

export default App;
