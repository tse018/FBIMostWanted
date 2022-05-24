import Home             from './views/Home.vue';
import Categories       from './views/Categories.vue';
import Captured         from './views/Captured.vue';
import CaseOfTheWeek    from './views/CaseOfTheWeek.vue';
import PageNotFound     from './views/PageNotFound.vue';

export default [
      // drop down menu for category White-Collar-Crime content often been removed and the page will be white screen,
      // so decided to redirect users to home instead
      { path: '/wanted/category/White-Collar-Crime', redirect: { name: 'home' }},

      // when user pick Select a Category from drop down, will end up on empty path /wanted/category/,
      // so decided to redirect to home page as well
      { path: '/wanted/category/',  redirect: to => { return { path: '/',  }}},

      { name: 'subjects',           path: '/wanted/category/:subjects_id',              component: Categories },
      { name: 'captured',           path: '/wanted/category/captured',                 component: Captured},
      { name: 'caseoftheweek',      path: '/wanted/category/case-of-the-week',         component: CaseOfTheWeek},
      { name: 'home',               path: '/',                                         component: Home },
      { name: 'pagenotfound',       path: '/:pathMatch(.*)*',                          component: PageNotFound },
]