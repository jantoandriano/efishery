import create from "zustand";
import baseApi from "../configs/api";

const useListSizes = create((set) => ({
  listSizes: [],

  fetchSizes: async () => {
    const response = await baseApi.get("option_size");
    const { data } = response;

    let payload = data.map((item) => {
      return {
        value: item.size,
        label: item.size,
      };
    });

    set({ listSizes: payload });
  },
}));
export default useListSizes;
