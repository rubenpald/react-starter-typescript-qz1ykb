import React from 'react';
import Child from './classes/Child';
import Parent from './classes/Parent';
import Cat from './classes/ThisExample';
import AwaitExample from './components/AwaitExample';
import { ButtonCounter } from './components/ButtonCounter';
import PromiseExample from './components/PromiseExample';
import { UnMountExample } from './components/UnMountExample';
import { UseMemoExample } from './components/UseMemoExample';
import { A, B } from './interface/interfaces';

export const App = () => {
  // TIPOS PRIMITIVOS
  const a: number = 0;
  const b: String = '0';
  const c: boolean = false;
  const d: null = null;
  const f: undefined = undefined;

  console.log(`d == f ${d == f}`);
  console.log(`d === f ${d === f}`);
  console.log(`a == b ${a == b}`);
  console.log(`a === b ${a === b}`);
  console.log(`a == c ${a == c}`);
  console.log(`b == c ${b == c}`);
  console.log(`a to boolean ${!!a}`);

  if (!b) {
    console.log('b es falso');
  }

  

  return (
    <div className="p-2">
      {/* <ButtonCounter name="test" /> */}
      {/* <UnMountExample /> */}
      {/* <UseMemoExample /> */}
      {/* <PromiseExample /> */}
      {/* <AwaitExample /> */}
    </div>
  );
};
