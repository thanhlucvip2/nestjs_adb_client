import { useEffect } from "react";
import { useLoading } from "src/hooks/useLoading";

export const Home = () => {
  const { setLoading } = useLoading();
  useEffect(() => {
    setLoading(false);
  }, []);
  return <>Home</>;
};
