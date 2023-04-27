import React = require('react');

const AwaitExample = () => {
  const asyncFunction = async () => {
    console.log('Process async function');

    let result = 0;

    try {
      result = await myPromise();
    } catch (err) {
      console.log(err);
      result = 100;
    }

    return 1 + result;
  };

  const myPromise = () => {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        console.log('PROCESS PROMISE');
        resolve(10);
      }, 100);
    });
  };

  return (
    <button
      onClick={async () => {
        console.log(await asyncFunction());
      }}
      className="btn btn-primary"
    >
      TEST AWAIT
    </button>
  );
};

export default AwaitExample;
