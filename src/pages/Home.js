import { useEffect, useState } from "react";
import Table from "../components/Table";

import LogoFish from "../assets/images/logo-fish-green.png";
import AddData from "./AddData";
import useListData from "../stores/useListData";
import useListAreas from "../stores/useListAreas";
import useListSizes from "../stores/useListSizes";

import Modal from "../components/Modal";

const form = {
  Komoditas: {
    type: "text",
    required: true,
    placeholder: "Komoditas",
  },
  Area: {
    type: "select",
    options: [
      {
        label: "0",
        value: "0",
      },
    ],
    required: true,
  },
  Harga: {
    type: "currency",
    placeholder: "1.000.000",
    required: true,
  },
  Ukuran: {
    type: "select",
    options: [
      {
        label: "0",
        value: "0",
      },
    ],
    required: true,
  },
  Simpan: {
    type: "submit",
  },
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [listForm, setlistForm] = useState(form);
  const [isReady, setReady] = useState(false);
  const [refresh, setRefresh] = useState("0");
  const { listAreas, fetchAreas } = useListAreas((state) => state);
  const { listSizes, fetchSizes } = useListSizes((state) => state);
  const { listData, fetchList } = useListData((state) => state);

  useEffect(() => {
    Promise.all([fetchAreas(), fetchSizes()]).then((e) => {
      setReady(true);
    });
  }, []);

  useEffect(() => {
    setlistForm({
      ...listForm,
      Ukuran: {
        ...listForm.Ukuran,
        options: listSizes,
      },
      Area: {
        ...listForm.Area,
        options: listAreas,
      },
    });
  }, [listAreas, listSizes]);

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
        {listData.length ? (
          <Table data={listData} />
        ) : (
          <div className="page-loading">
            <img src={LogoFish} alt="logoFish" />
          </div>
        )}
      </div>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} isLoading={isReady}>
          <AddData
            listForm={listForm}
            isReady={isReady}
            handleOpenModal={handleOpenModal}
            setRefresh={setRefresh}
          />
        </Modal>
      )}
    </>
  );
};

export default Home;
