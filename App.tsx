import React from 'react';
import { ButtonCounter } from './components/ButtonCounter';
import { UnMountExample } from './components/UnMountExample';
import { UseMemoExample } from './components/UseMemoExample';

export const App = () => {
  const name: string = 'Hello React Button';

  return (
    <div className="p-2">
      {/* <UnMountExample /> */}
      <UseMemoExample />
    </div>
  );
};
