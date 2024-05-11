import { useEffect, useRef } from "react";

export function useOutsideClick(handle, listenCapture = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handle();
        }
      }
      document.addEventListener("click", handleClick, listenCapture);
      return () =>
        document.removeEventListener("click", handleClick, listenCapture);
    },
    [handle, listenCapture]
  );

  return ref;
}
