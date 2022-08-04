import { useState } from 'react';

export default function useHover(): [() => void, () => void, boolean] {
  const [isHover, setIsHover] = useState(false);

  const onMouseOver = () => setIsHover(true);
  const onMouseOut = () => setIsHover(false);

  return [onMouseOver, onMouseOut, isHover];
}
