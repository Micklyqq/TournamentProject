import create from "zustand";

export const CommandStore = create((set) => ({
  _commands: [{}],
  setCommand: (command) => set({ _commands: command }),
  _page: 1,
  _totalCount: 0,
  _limit: 6,
  setPage: (page) => {
    set((state) => {
      return { _page: page };
    });
  },
  setTotalCount: (totalCount) => {
    set((state) => {
      return { _totalCount: totalCount };
    });
  },
  setLimit: (limit) => {
    set((state) => {
      return { _limit: limit };
    });
  },
}));
