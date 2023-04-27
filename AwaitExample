import React = require('react');

const PromiseExample = () => {
  const myPromise = () => {
    console.log('ANTES DE PROMISE');

    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('PROCESS PROMISE');
        reject('reject value');
      }, 100);
    })
      .then((result) => {
        console.log('then ' + result);
      })
      .catch((err) => {
        console.log('catch ' + err);
      });
    console.log('DESPUES DE PROMISE');

    return prom;
  };

  return (
    <button onClick={async () => myPromise()} className="btn btn-primary">
      TEST PROMISE
    </button>
  );
};

export default PromiseExample;
