import React from 'react';
import { Button, View } from 'react-native';

interface Props {
  onPress: () => void;
}

function BotonDecremento({ onPress }: Props) {
  return  (
    <View style={{ width: 45 }}>
      <Button title="-" onPress={onPress} />
    </View>
  );
}
export default BotonDecremento;
