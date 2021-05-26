import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const hash = require('string-hash');
const color = require('tinycolor2');

const RandomGradient = ({name}) => {
  const [colors, setColors] = useState(['#000000', '#000000']);
  console.log('findThis', name);

  useEffect(() => {
    this.randomGenerate(name);
  }, [1]);

  randomGenerate = uid => {
    if (uid) {
      const n = hash(uid);
      const c1 = color({h: n % 360, s: 0.95, l: 0.5});
      const c1_ = c1.toHexString();
      const c2 = c1.triad()[1].toHexString();

      setColors([c1_, c2]);
    }
  };
  return (
    <LinearGradient
      colors={colors}
      style={styles.sectionContainer}></LinearGradient>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    padding: 100,
    margin: 10,
  },
});

export default RandomGradient;
