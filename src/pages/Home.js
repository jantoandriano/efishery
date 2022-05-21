import { useEffect } from "react";
import useStore from "./stores/useStore";

const Home = () => {
  const { listData, fetchList } = useStore((state) => state);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  console.log("listData", listData);
  return <div>Home</div>;
};

export default Home;
