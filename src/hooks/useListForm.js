import { useState, useEffect } from "react";
import useListAreas from "../stores/useListAreas";
import useListSizes from "../stores/useListSizes";
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

function useListForm() {
  const [listForm, setlistForm] = useState(form);
  const [isReady, setReady] = useState(false);
  const { listAreas, fetchAreas } = useListAreas((state) => state);
  const { listSizes, fetchSizes } = useListSizes((state) => state);

  useEffect(() => {
    Promise.all([fetchAreas(), fetchSizes()]).then((e) => {
      setReady(true);
    });
  }, [fetchAreas, fetchSizes]);

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
  }, [listAreas, listSizes, listForm]);
  return {
    isReady,
    listForm,
  };
}

export default useListForm;
