import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  colorfondo?: string;
  anchoboton?: boolean;
  accion: (textoNumero:string) => void;
}

const BotonCalculadora = ({
  texto,
  colorfondo = '#2D2D2D',
  anchoboton = false,
  accion
}: Props) => {
  return (
    <TouchableOpacity
    onPress={()=>accion(texto) }>

      <View
        style={{
          ...styles.boton,
          backgroundColor: colorfondo,
          width: anchoboton ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textoBoton,
            color: colorfondo === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalculadora;
