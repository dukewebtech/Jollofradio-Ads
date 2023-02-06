import { createRouter, createWebHistory, useRoute } from 'vue-router';

const routes = [
  {
    path: '/:catchAll(.*)',
    component: () => import('../pages/error/NotFoundPage.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../pages/layouts/AuthLayout.vue'),
    redirect: '/auth/signin',
    children: [
      {
        path: 'signin',
        name: 'auth.signin',
        component: () => import('../pages/auth/LoginPage.vue'),
        meta: {
          title: 'Sign In',
        },
      },
      {
        path: 'signup',
        name: 'auth.signup',
        component: () => import('../pages/auth/SignupPage.vue'),
        meta: {
          title: 'Sign up',
        },
      },
      {
        path: 'select-interests',
        name: 'auth.profile.interests',
        component: () => import('../pages/auth/SelectCategory.vue'),
        meta: {
          title: 'Select categories of interest',
        },
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard.home',
    redirect: '/dashboard/home',
    component: () => import('../pages/layouts/DashBoardLayout.vue'),
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return { top: 0 };
      // return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const metaTitle = to.matched
    .slice()
    .reverse()
    .find((route) => route.meta && route.meta.title);
  // If a route with a title was found, set the document (page) title to that value.
  if (metaTitle) document.title = metaTitle.meta.title + ' | JollofRadio Ads';

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (to.name) {
    window.NProgress.start();
    window.NProgress.set(0.2);
  }
  next();

  // //redirect to login page if not logged in and trying to access a restricted page
  // const publicPages = ["/signin", "/signup"];
  // const authRequired = !publicPages.includes(to.path);
  // const loggedIn = isAuthenticated();
  // if (authRequired && !loggedIn) {
  //   return next("/login");
  // }

  // router guard
  // if (to.meta && to.meta.public) {
  //   return next();
  // } else {
  //   // const isLoggedIn = isAuthenticated();
  //   if (isLoggedIn == true) {
  //     return next();
  //   } else {
  //     return next('/signin');
  //   }
  // }
});

router.afterEach(() => {
  window.NProgress.set(0.7);
  setTimeout(() => window.NProgress.done(), 400);
});

const isActiveRoute = (routeName: string): boolean =>
  useRoute().name!.toString().includes(routeName);

export { router, isActiveRoute };
