import { MouseEvent, MouseEventHandler, RefObject, useState } from 'react';

const useDragScroll = (ref: RefObject<HTMLUListElement>) => {
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = (e: MouseEvent<HTMLUListElement>) => {
    e.preventDefault();
    setIsDrag(true);
    if (ref.current) setStartX(e.pageX + ref.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: MouseEvent<HTMLUListElement>) => {
    if (isDrag && ref.current) {
      const { scrollWidth, clientWidth, scrollLeft } = ref.current;

      ref.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };
  return { onDragStart, onDragEnd, onDragMove, isDrag };
};

export default useDragScroll;
