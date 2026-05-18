import React from 'react';
import { Button, View } from 'react-native';

interface Props {
  onPress: () => void;
}

function BotonIncremento({ onPress }: Props) {
  return  (
    <View style={{ width: 45 }}>
      <Button title="+" onPress={onPress} />
    </View>
  );
}
export default BotonIncremento;


