import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

const Demo = () => {
  const [internalState, setInternalState] = useState<boolean>(true);
  const ref = useRef<boolean>();

  useEffect(() => {
    console.log('on init');
    ref.current = true;

    setTimeout(() => {
      console.log('finish count');
      ref.current && setInternalState(false);
    }, 3000);

    return () => {
      console.log('on destroy');
      ref.current = false;
    };
  }, []);

  useEffect(() => {
    console.log(internalState);
  }, [internalState]);

  return <div />;
};

export const UnMountExample = () => {
  const [enable, setEnable] = useState<boolean>(true);

  return (
    <div>
      <button
        onClick={() => setEnable((prevState) => !prevState)}
        className="btn btn-primary"
      >
        {enable ? 'ON' : 'OFF'}
      </button>
      {enable && <Demo />}
    </div>
  );
};
