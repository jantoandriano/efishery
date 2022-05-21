import { useEffect } from "react";
import Table from "../components/Table";

import useStore from "../stores/useStore";
import LogoFish from "../assets/images/logo-fish-green.png";

const Home = () => {
  const { listData, fetchList } = useStore((state) => state);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <div className="page-content">
      {listData.length > 0 ? (
        <Table data={listData} />
      ) : (
        <div className={"page-loading"}>
          <img src={LogoFish} alt="logoFish" />
        </div>
      )}
    </div>
  );
};

export default Home;
