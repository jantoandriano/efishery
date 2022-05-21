import React from "react";
import { useNavigate } from "react-router-dom";
import JsonToForm from "json-reactform";
import baseApi from "../configs/api";

const AddData = (props) => {
  const { listForm, isReady } = props;

  const navigate = useNavigate();

  const submit = (params) => {
    const payload = [
      {
        uuid: Date.now(),
        komoditas: params["Komoditas"],
        area_provinsi: params["Area"].value.split(",")[0],
        area_kota: params["Area"].value.split(",")[1],
        size: params["Ukuran"].value,
        price: params["Harga"],
        tgl_parsed: new Date().toISOString(),
        timestamp: Date.now(),
      },
    ];

    baseApi
      .post("list", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          console.log(response);
          navigate.push("/");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className={"add-list-page"}>
      {isReady && (
        <>
          <div className="d-flex align-items-center mb-4">
            <button
              onClick={navigate.goBack}
              className={"btn btn-efishery-primary btn-sm mt-2 mr-3"}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <h1 className="page-title mb-0">Tambahkan list baru</h1>
          </div>
          <div className={"add-new-form"}>
            <JsonToForm model={listForm} onSubmit={submit} />
          </div>
        </>
      )}
    </div>
  );
};

export default AddData;
