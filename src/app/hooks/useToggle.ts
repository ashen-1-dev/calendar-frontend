import { useCallback, useState } from 'react';

export const useToggle = (
  initialState: boolean = false,
): [state: boolean, toggle: () => void] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState(state => !state), []);

  return [state, toggle];
};
