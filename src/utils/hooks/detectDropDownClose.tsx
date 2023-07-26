"client side";

import { useEffect, useState, useRef, RefObject } from "react";

export const useDetectClose = (
  initialState: boolean,
): [
  boolean,
  RefObject<HTMLButtonElement>,
  (e: React.MouseEvent<Element, MouseEvent>) => void,
] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const ref = useRef<HTMLButtonElement>(null);

  const removeHandler: (
    e: React.MouseEvent<Element, MouseEvent>,
  ) => void = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        ref.current !== null &&
        !ref.current.contains(e.target as HTMLButtonElement)
      ) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen]);

  return [isOpen, ref, removeHandler];
};
