import React from 'react';
import {SafeAreaView} from 'react-native';
import RandomGradient from './Component/RandomGradient';

const App = () => {
  return (
    <SafeAreaView>
      <RandomGradient name={'blue'} />
    </SafeAreaView>
  );
};

export default App;
