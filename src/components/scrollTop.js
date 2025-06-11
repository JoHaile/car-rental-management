import { useEffect } from "react";

const scrollTop = () => {
  return useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default scrollTop;
