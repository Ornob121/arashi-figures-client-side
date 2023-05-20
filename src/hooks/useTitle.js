import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Arashi Figures  ${title}`;
  }, [title]);
};

export default useTitle;
