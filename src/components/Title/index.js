import React from 'react';
import {Text } from 'react-native';
import styles from './styles';

const Title = ({ text }) => {
  return (

        <Text style={styles.title}>
            {text}
        </Text>
    
   
  );
};
Title.defaultText = {
    text: "Default Text"
};

export default Title;