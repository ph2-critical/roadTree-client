import { useRef, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDidMountEffect = (func: any, deps?: any) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};
