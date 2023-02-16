import { createRouter, createWebHistory, useRoute } from 'vue-router';

import PodcasterOnAdPageVue from '../pages/dashboard/PodcasterOnAdPage.vue';
// layouts
const DashboardLayout = () => import('../layout/DashboardLayout.vue');
const PodcasterLayout = () => import('../layout/PodcasterLayout.vue');
const MonitizationLayout = () => import('../layout/MonitizationLayout.vue');
const AdvertCompanyLayout = () => import('../layout/AdvertCompanyLayout.vue');
const AdvertPreviewLayout = () => import('../layout/AdvertPreviewLayout.vue');
// dashboard pages
const HomePage = () => import('../pages/dashboard/OverviewPage.vue');
const EditHomePage = () => import('../pages/dashboard/EditHomePage.vue');

const PodcastPage = () => import('../pages/dashboard/PodcastPage.vue');
const UserPage = () => import('../pages/dashboard/UserPage.vue');
const RadioPage = () => import('../pages/dashboard/RadioPage.vue');
const ReplacementPage = () => import('../pages/dashboard/ReplacementPage.vue');
const AddRadioPage = () => import('../pages/dashboard/AddRadioPage.vue');
const LiveStreamingPage = () =>
  import('../pages/dashboard/LiveStreamingPage.vue');
const LiveAudioSchedulePage = () =>
  import('../pages/dashboard/LiveAudioSchedulePage.vue');
const AboutPage = () => import('../pages/dashboard/AboutPage.vue');
const ProfilePage = () => import('../pages/dashboard/ProfilePage.vue');
const MonitizationRequestPage = () =>
  import('../pages/dashboard/MonitizationRequestPage.vue');
const PodcasterOnAdPage = () =>
  import('../pages/dashboard/PodcasterOnAdPage.vue');
const CompletedPage = () => import('../pages/dashboard/CompletedPage.vue');
const OngoingAdPage = () => import('../pages/dashboard/OngoingAdPage.vue');
const CompletedAdvertPage = () =>
  import('../pages/dashboard/CompletedAdvertPage.vue');
const OngoingAdvertPage = () =>
  import('../pages/dashboard/OngoingAdvertPage.vue');
const AudioAdPage = () => import('../pages/dashboard/AudioAdPage.vue');
const AllAdvertPage = () => import('../pages/dashboard/AllAdvertsPage.vue');
const TextAdPage = () => import('../pages/dashboard/TextAdPage.vue');

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
    path: '/admin-dashboard',
    name: 'adminDashboard',
    component: DashboardLayout,
    redirect: '/admin-dashboard/home',

    children: [
      {
        path: 'podcaster',
        name: 'dashboard.monitization.podcaster',
        component: PodcasterLayout,
        children: [
          {
            path: '',
            name: 'dashboard.monitization.ongoing-ads',
            component: OngoingAdPage,
            meta: {
              title: 'Dashboard - Monitization - OngoingAd',
            },
          },
          {
            path: 'completed',
            name: 'dashboard.monitization.completed',
            component: CompletedPage,
            meta: {
              title: 'Dashboard - Monitization - Completed',
            },
          },
        ],
      },
      {
        path: 'monitization',
        name: 'dashboard.monitization',
        component: MonitizationLayout,
        redirect: '/admin-dashboard/monitization/request',
        children: [
          {
            path: 'request',
            name: 'dashboard.monitization.request',
            component: MonitizationRequestPage,
            meta: {
              title: 'Dashboard - Monitization - Request',
            },
          },
          {
            path: 'podcaster-on-ad',
            name: 'dashboard.monitization.podcasteronad',
            component: PodcasterOnAdPage,
            meta: {
              title: 'Dashboard - Monitization - Podcaster',
            },
          },
        ],
      },
      {
        path: 'advert/all',
        name: 'dashboard.advert.all',
        component: AllAdvertPage,
        meta: {
          title: 'Dashboard - Advert - All',
        },
      },
      {
        path: 'advert-company',
        name: 'dashboard.advert',
        component: AdvertCompanyLayout,
        redirect: '/admin-dashboard/advert-company/ongoing',
        children: [
          {
            path: 'ongoing',
            name: 'dashboard.advert.ongoing',
            component: OngoingAdvertPage,
            meta: {
              title: 'Dashboard - Advert - Ongoing',
            },
          },
          {
            path: 'completed',
            name: 'dashboard.advert.completed',
            component: CompletedAdvertPage,
            meta: {
              title: 'Dashboard - Advert - Completed',
            },
          },
        ],
      },
      {
        path: 'advert-preview',

        component: AdvertPreviewLayout,
        redirect: '/admin-dashboard/advert-preview/text',
        children: [
          {
            path: 'text',
            name: 'dashboard.advert.preview.text',
            component: TextAdPage,
            meta: {
              title: 'Dashboard - Advert - Preview - Text',
            },
          },
          {
            path: 'audio',
            name: 'dashboard.advert.preview.audio',
            component: AudioAdPage,
            meta: {
              title: 'Dashboard - Advert - Preview - Audio',
            },
          },
        ],
      },

      {
        path: 'home',
        name: 'dashboard.home',
        component: HomePage,
        meta: {
          title: 'Dashboard - Home',
        },
      },
      {
        path: 'home/audio-streaming',
        name: 'dashboard.home.audiostream',
        component: LiveStreamingPage,
        meta: {
          title: 'Dashboard - Home - Stream - Audio',
        },
      },
      {
        path: 'home/audio-streaming-schedule',
        name: 'dashboard.home.audiostreamschedule',
        component: LiveAudioSchedulePage,
        meta: {
          title: 'Dashboard - Home - Schedule - Audio - Stream',
        },
      },
      {
        path: 'home/edit',
        name: 'dashboard.home.edit',
        component: EditHomePage,
        meta: {
          title: 'Dashboard - Home - Edit',
        },
      },
      {
        path: 'podcast',
        name: 'dashboard.podcast',
        component: PodcastPage,
        meta: {
          title: 'Dashboard - Podcast',
        },
      },
      {
        path: 'user',
        name: 'dashboard.user',
        component: UserPage,
        meta: {
          title: 'Dashboard - User',
        },
      },
      {
        path: 'replacement',
        name: 'dashboard.replacement',
        component: ReplacementPage,
        meta: {
          title: 'Dashboard - Replacement',
        },
      },
      {
        path: 'radio',
        name: 'dashboard.radio',
        component: RadioPage,
        meta: {
          title: 'Dashboard - Radio',
        },
      },
      {
        path: 'add-radio',
        name: 'dashboard.radio.add',
        component: AddRadioPage,
        meta: {
          title: 'Dashboard - Radio - Create',
        },
      },

      {
        path: 'about',
        name: 'dashboard.radio.about',
        component: AboutPage,
        meta: {
          title: 'Dashboard - Radio - About',
        },
      },

      {
        path: 'profile',
        name: 'dashboard.podcast.profile',
        component: ProfilePage,
        meta: {
          title: 'Dashboard - Podcast - Profile',
        },
      },
    ],
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
