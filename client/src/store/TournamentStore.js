import create from "zustand";

export const TournamentStore = create((set) => ({
  _tournaments: [{}],
  _games: [{}],
  _page: 1,
  _totalCount: 0,
  _limit: 5,
  setTournament: (tournament) =>
    set((state) => {
      return { _tournaments: tournament };
    }),
  setGame: (game) =>
    set((state) => {
      return { _games: game };
    }),

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
