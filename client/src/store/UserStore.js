import create from "zustand";
import { devtools } from "zustand/middleware";

export const UserStore = create(
  devtools((set) => ({
    _isAuth: false,
    _user: {},
    _userLogo: "",
    _userName: "",
    _allUsers: [],
    setIsAuth: (bool) =>
      set((state) => {
        return { _isAuth: bool };
      }),
    setUser: (user) =>
      set((state) => {
        return { _user: user };
      }),

    setAllUsers: (users) =>
      set((state) => {
        return { _allUsers: users };
      }),

    setUserLogo: (logo) =>
      set((state) => {
        return { _userLogo: logo };
      }),

    setUserName: (userName) =>
      set((state) => {
        return { _userName: userName };
      }),
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
  }))
);
