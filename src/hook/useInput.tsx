import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

const useInput = <T extends string | number>(initialValue: T): [T, (text: T) => void] => {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(e.nativeEvent.text as unknown as T);
  };

  const handleChangeText = (text: T) => {
    setValue(text);
  };

  return [value, handleChangeText];
};

export default useInput;