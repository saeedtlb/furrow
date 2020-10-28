import { useState, useEffect } from "react";

export default useElementPosition = el => {
  const getElement = (x, y) => ({ x, y });

  const [elementPosition, setElementPosition] = useState(getElement);

  useEffect(() => {
    const handlePosition = () => {
      const { current: element } = el;
      const x =
        element.getBoundingClientRect().left +
        document.documentElement.scrollLeft +
        element.offsetWidth / 2;
      const y =
        element.getBoundingClientRect().top +
        document.documentElement.scrollTop +
        element.offsetHeight / 2;

      setElementPosition(getElement(x, y));
    };

    handlePosition();

    return elementPosition;
  }, [el]);
};
