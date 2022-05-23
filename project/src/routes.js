import Home             from './views/Home.vue';
import Categories         from './views/Categories.vue';
import CaseOfTheWeek    from './views/CaseOfTheWeek.vue';

export default [
      { name: 'subjects',           path: '/wanted/category/:subjects_id',       component: Categories },
      { name: 'caseoftheweek',      path: '/wanted/:case_id',           component: CaseOfTheWeek },
      { name: 'home',               path: '/',                          component: Home },
]