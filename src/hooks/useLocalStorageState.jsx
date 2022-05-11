import { useEffect, useState } from "react";
import { decodeObjectString, encodeObject } from "../utils/encodeUtils";

const useLocalStorageState = (key, defaultValue = "") => {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return decodeObjectString(valueInLocalStorage);
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, encodeObject(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorageState;
