import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/layout.vue";

// import { getJwtToken } from '../utils/helpers';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: Layout,
      children: [
        {
          path: "/home",
          component: () => import("../page/home/home.vue"),
          name: "home",
        },
        {
          path: "/top-company",
          component: () => import("../page/company/Company.vue"),
          name: "TopCompany",
        },
        {
          path: "/list-company",
          component: () => import("../page/company/Company.vue"),
          name: "ListCompany",
        },
        {
          path: "/tienich",
          component: () => import("../page/tienich/LayoutTienich.vue"),
          name: "LayoutTienich",
          redirect: "/lai-xuat-kep",
          children: [
            {
              path: "lai-xuat-kep",
              component: () =>
                import("../page/tienich/laixuatkep/Laixuatkep.vue"),
              name: "Laixuatkep",
            },
            {
              path: "gross-to-net",
              component: () => import("../page/tienich/gross-net/GrossNet.vue"),
              name: "GrossNet",
            },
            {
              path: "bao-hiem-that-nghiep",
              component: () =>
                import(
                  "../page/tienich/baohiemthatnghiep/Baohiemthatnghiep.vue"
                ),
              name: "Baohiemthatnghiep",
            },
            {
              path: "thu-nhap-ca-nhan",
              component: () =>
                import("../page/tienich/thunhapcanhan/Thunhapcanhan.vue"),
              name: "Thunhapcanhan",
            },
            {
              path: "bao-hiem-xa-hoi",
              component: () =>
                import("../page/tienich/baohiemxahoi/Baohiemxahoi.vue"),
              name: "Baohiemxahoi",
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      component: () => import("../page/login/login.vue"),
      name: "login",
    },
    {
      path: "/sign-up",
      component: () => import("../page/login/login.vue"),
      name: "sign-up",
    },
    {
      path: "/login-tuyendung",
      component: () => import("../page/login-tuyendung/Login-tuyendung.vue"),
      name: "login_tuyendung",
    },
    {
      path: "/signup-tuyendung",
      component: () => import("../page/login-tuyendung/SignUp-tuyendung.vue"),
      name: "SignUp_tuyendung",
    },
    {
      path: "/:notFound(.*)",
      component: () => import("../page/PageNotFound/NotFoundPage.vue"),
      name: "NotFound",
    },
  ],
});
// router.beforeEach((to, from, next) => {
//   const token = getJwtToken();
//   if (!token && to.path !== '/login') {
//     next({ path: '/login' });
//   }
//   if (token && to.path === '/login') {
//     next(from.path);
//   } else {
//     next();
//   }
// });
