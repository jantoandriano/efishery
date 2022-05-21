import create from "zustand";
import baseApi from "../configs/api";

const useStore = create((set) => ({
  listData: [],
  fetchList: async () => {
    const response = await baseApi.get("list");
    const { data } = response;

    const payload = data.reduce((acc, current) => {
      const x = acc.find((item) => item.uuid === current.uuid);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    set({ listData: payload });
  },
}));
export default useStore;
