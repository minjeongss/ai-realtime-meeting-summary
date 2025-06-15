import { create } from "zustand";

const useSocketStore = create(() => ({
  socket: null,
}));

export default useSocketStore;
