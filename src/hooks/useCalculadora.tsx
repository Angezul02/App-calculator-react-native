import { useRef, useState } from "react";

enum operadores {
    suma,resta,multiplicacion,division
}


const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numeroresultado, setNumeroresultado] = useState('0');
  
    const ultimaOperacion = useRef<operadores>()
  
    const deletenumbers = () => {
      setNumeroresultado('0');
      setNumeroAnterior("0")
    };
  
    const armarNumero = (numeroTexto: string) => {
  
      if (numeroresultado.includes('.') && numeroTexto === '.') return;
  
      if (numeroresultado.startsWith('0') || numeroresultado.startsWith('-0')) {
  
        if (numeroTexto === '.') {
          setNumeroresultado(numeroresultado + numeroTexto);
        } else if (numeroTexto === '0' && numeroresultado.includes('.')) {
          setNumeroresultado(numeroresultado + numeroTexto);
        } else if (numeroTexto !== '0' && !numeroresultado.includes('.')) {
          setNumeroresultado(numeroTexto);
        } else if (numeroTexto === '0' && !numeroresultado.includes('.')) {
          setNumeroresultado(numeroresultado);
        } else {
          setNumeroresultado(numeroresultado + numeroTexto);
        }
  
      } else {
        setNumeroresultado(numeroresultado + numeroTexto);
      }
    };
  
    const positivoNegativo = () => {
      if (numeroresultado.includes('-')) {
        setNumeroresultado(numeroresultado.replace('-', ''));
      } else setNumeroresultado('-' + numeroresultado);
    };
  
    const btnDel =()=>{
      if ((numeroresultado.length<= 1) || (numeroresultado.length<= 2 && numeroresultado.includes("-"))){
          setNumeroresultado("0")
      }else if (numeroresultado.length>1){
          setNumeroresultado (numeroresultado.slice(0, -1))
      }    
    }
  
    const cambiarNumPorAnterior =()=>{
      if(numeroresultado.endsWith(".")){
          setNumeroAnterior(numeroresultado.slice(0,-1))
  
      }else{
          setNumeroAnterior(numeroresultado)
      }
      setNumeroresultado("0")
    }
  
    const btnDividir =()=>{
      cambiarNumPorAnterior();
      ultimaOperacion.current= operadores.division
  
    }
  
    const btnMultiplicar =()=>{
      cambiarNumPorAnterior();
      ultimaOperacion.current= operadores.multiplicacion
  
    }
    const btnSumar =()=>{
      cambiarNumPorAnterior();
      ultimaOperacion.current= operadores.suma
  
    }
    const btnResta =()=>{
      cambiarNumPorAnterior();
      ultimaOperacion.current= operadores.resta
  
    }
  
    const calcular =()=>{
      const num1 = Number(numeroresultado);
      const num2 = Number(numeroAnterior);
  
      switch (ultimaOperacion.current) {
          case operadores.suma:
              setNumeroresultado(`${num1 + num2}`)
              break;
  
          case operadores.resta:
              setNumeroresultado(`${num2 - num1}`)
                 
              break;
                  
          case operadores.multiplicacion:
              setNumeroresultado(`${num1 * num2}`)
                     
              break;
  
          case operadores.division:
              
              setNumeroresultado(`${num2 / num1}`)
             
              break;
      
          default:
              break;
      }
  
      setNumeroAnterior("0")
  
    }

    return {
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
        calcular
    }
}

export default useCalculadora
