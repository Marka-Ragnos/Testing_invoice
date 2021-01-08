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

export const ServerResponseStatus = {
   OK: 200,
   UNAUTHORIZED: 401,
};

export const ServerURL = {
   LOGIN: `/login`,
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
      title: "Главная",
      path: "/buyers-page",
      private: true,
   },
};
