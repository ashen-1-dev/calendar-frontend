import { useState } from 'react';

export default function useHover(): [
  onMouseOver: () => void,
  onMouseOut: () => void,
  isHover: boolean,
] {
  const [isHover, setIsHover] = useState(false);

  const onMouseOver = () => setIsHover(true);
  const onMouseOut = () => setIsHover(false);

  return [onMouseOver, onMouseOut, isHover];
}
