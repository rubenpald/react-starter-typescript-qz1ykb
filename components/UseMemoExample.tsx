import React, { useCallback, useEffect, useMemo } from 'react';

export const UseMemoExample = () => {
  console.log('ANTES DEL ON INIT');
  useEffect(() => {
    console.log('PROCESS INIT');
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
