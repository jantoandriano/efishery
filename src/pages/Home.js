import { useEffect, useState } from "react";
import Table from "../components/Table";
import Modal from "../components/Modal";
import AddData from "./AddData";
import useListData from "../stores/useListData";
import useListForm from "../hooks/useListForm";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [refresh, setRefresh] = useState("0");
  const { listData, fetchList } = useListData((state) => state);
  const { isReady, listForm } = useListForm();

  useEffect(() => {
    fetchList();
  }, [fetchList, refresh]);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="page-content">
        <div className="btn-add-container">
          <button onClick={handleOpenModal}>Tambah Data</button>
        </div>
        <Table data={listData} />
      </div>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} isLoading={isReady}>
        <AddData
          listForm={listForm}
          isReady={isReady}
          handleOpenModal={handleOpenModal}
          setRefresh={setRefresh}
        />
      </Modal>
    </>
  );
};

export default Home;
