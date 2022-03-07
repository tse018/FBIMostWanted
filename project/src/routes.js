import Home             from './views/Home.vue';
import Subjects         from './views/Subjects.vue';
import CaseOfTheWeek    from './views/CaseOfTheWeek.vue';

export default [
      { name: 'subjects',           path: '/wanted/:subjects_id',       component: Subjects },
      { name: 'caseoftheweek',      path: '/wanted/:case_id',           component: CaseOfTheWeek },
      { name: 'home',               path: '/',                          component: Home },
]