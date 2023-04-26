import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

/**
 * EJEMPLO DE FLUJO DE LOS HOOKS useState useRef, useEffect, useMemo y useCallback.
 * useEffect es asincrono por lo tanto el render no espera a su procesamiento para finalizar
 * useState es asincrono y su valor asignado no esta disponible hasta otro render
 * useMemo y useCallback son sincronos hasta que su procesamiento no finaliza no termina el render.
 */

let numRenders = 0;

export const UseMemoExample = () => {
  console.log('--------------->RENDER ' + ++numRenders);

  const ref = useRef<string>();
  const [state, setState] = useState<string>('valor incial');

  /* INFINITE LOOP
  console.log(state);
  setState('otrovalor');
  console.log(state);
  console.log('------');
  */

  console.log(state);

  ref.current = 'any';
  console.log(ref.current);
  console.log('----------');

  console.log('ANTES DEL ON INIT');
  useEffect(() => {
    console.log('PROCESS INIT');

    setState('otrovalor');
    console.log(state);
    console.log('------');
  }, []);
  console.log('DESPUES DEL ON INIT');
  console.log('-------------------');

  console.log('ANTES DEL MEMO');
  const memoResult = useMemo(() => {
    console.log('PROCESS MEMO');
    return 1;
  }, []);
  console.log('DESPUES DEL MEMO');
  console.log(memoResult);
  console.log('----------------');

  console.log('ANTES DEL CALLBACK');
  const callBackResult = useCallback(() => {
    console.log('PROCESS CALLBACK');
    return 1;
  }, []);
  console.log(callBackResult());
  console.log('DESPUES DEL CALLBACK');
  console.log('--------------------');

  return <div>USE MEMO EXAMPLE</div>;
};
