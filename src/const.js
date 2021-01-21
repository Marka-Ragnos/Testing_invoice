export const NameSpace = {
   APP: `APP`,
   USER: `USER`,
   BUYERS: `BUYERS`,
   TERMINALS: `TERMINALS`,
};

export const Path = {
   MAIN: `/`,
   LOGIN: `/sign-in-page`,
   TERMINALS: `/terminals-page`,
   BUYERS: `/buyers-page`,
   BUYERS_INDIVIDUAL: `/buyers/`,
   NOT_FOUND: `/not-found-page`,
};

export const ServerURL = {
   LOGIN: `https://api.github.com/users/`,
};

export const Status = {
   AUTHORIZED: `AUTHORIZED`,
   UNAUTHORIZED: `UNAUTHORIZED`,
};

export const NavigationList = {
   HOME: {
      title: "Главная",
      path: "/",
      private: false,
   },
   LOGIN: {
      title: "Залогиниться",
      path: "/sign-in-page",
      private: false,
   },
   TERMINALS: {
      title: "Терминалы",
      path: "/terminals-page",
      private: true,
   },
   BUYERS: {
      title: "Покупатели",
      path: "/buyers-page",
      private: true,
   },
   EXIT: {
      title: "Выход",
      path: "/",
      private: true,
   }
};
