import { useEffect, useState } from "react";

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  console.log(hasMounted);
  return hasMounted;
};

export default useHasMounted;
