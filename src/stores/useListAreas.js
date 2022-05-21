import create from "zustand";
import baseApi from "../configs/api";

const useListAreas = create((set) => ({
  listAreas: [],

  fetchAreas: async () => {
    const response = await baseApi.get("option_area");
    const { data } = response;

    let payload = data.map((item) => {
      return {
        value: `${item.province},${item.city}`,
        label: `${item.province} - ${item.city}`,
      };
    });

    set({ listAreas: payload });
  },
}));
export default useListAreas;
