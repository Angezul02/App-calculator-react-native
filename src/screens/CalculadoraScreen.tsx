import React from 'react';
import {Text, View} from 'react-native';
import BotonCalculadora from '../components/BotonCalculadora';
import {styles} from '../theme/appTheme';
import useCalculadora from '../hooks/useCalculadora';

//curso udemy react native - Fernando Herrera :) 

const CalculadoraScreen = () => {
  
const {
        numeroAnterior,
        numeroresultado,
        deletenumbers,
        positivoNegativo,
        btnDel,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnResta,
        btnSumar,
        calcular,

}= useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
        {
            (numeroAnterior!=="0") && (
            <Text style={styles.resultadoPequeño}>{numeroAnterior}</Text>
            )
        }
      
      <Text style={styles.resultado} numberOfLines={2} adjustsFontSizeToFit>
        {numeroresultado}
      </Text>

      <View style={styles.fila}>
        <BotonCalculadora
          texto="C"
          colorfondo="#9B9B9B"
          accion={deletenumbers}
        />
        <BotonCalculadora
          texto="+/-"
          colorfondo="#9B9B9B"
          accion={positivoNegativo}
        />
        <BotonCalculadora
          texto="del"
          colorfondo="#9B9B9B"
          accion={btnDel}
        />
        <BotonCalculadora
          texto="/"
          colorfondo="#FF9427"
          accion={btnDividir}
          
        />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto="7" accion={armarNumero} />
        <BotonCalculadora texto="8" accion={armarNumero} />
        <BotonCalculadora texto="9" accion={armarNumero} />
        <BotonCalculadora
          texto="X"
          colorfondo="#FF9427"
          accion={btnMultiplicar}
        />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto="4" accion={armarNumero} />
        <BotonCalculadora texto="5" accion={armarNumero} />
        <BotonCalculadora texto="6" accion={armarNumero} />
        <BotonCalculadora
          texto="-"
          colorfondo="#FF9427"
          accion={btnResta}
        />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto="1" accion={armarNumero} />
        <BotonCalculadora texto="2" accion={armarNumero} />
        <BotonCalculadora texto="3" accion={armarNumero} />
        <BotonCalculadora
          texto="+"
          colorfondo="#FF9427"
          accion={btnSumar}
        />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto="0" accion={armarNumero} anchoboton />
        <BotonCalculadora texto="." accion={armarNumero} />
        <BotonCalculadora
          texto="="
          colorfondo="#FF9427"
          accion={calcular}
        />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
