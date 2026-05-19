import { Button } from 'react-native'
import React from 'react'

interface BotonTransferirProps {
    onPress: () => void;
}

export default function BotonTransferir(props: BotonTransferirProps) {
  return (
    <Button title='Transferir' onPress={() => props.onPress()} />
  )
}
