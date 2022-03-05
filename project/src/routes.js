import Home from './views/Home.vue';
import SeekingInformation from './views/SeekingInformation.vue';
import KidnappingAndMissing from './views/KidnappingAndMissing.vue';
import Endangered from './views/Endangered.vue';
import CrimesAgainstChildren from './views/CrimesAgainstChildren.vue';
import CaseOfTheWeek from './views/CaseOfTheWeek.vue';
import Vicap from './views/Vicap.vue';

export default [
      { name: 'kidnappingandmissing', path: '/kidnappings and missing persons', component: KidnappingAndMissing },
      { name: 'endangered', path: '/endangered children', component: Endangered },
      { name: 'crimesagainstChildren', path: '/crimes against children', component: CrimesAgainstChildren },
      { name: 'caseoftheweek', path: '/case of the week', component: CaseOfTheWeek },
      { name: 'vicap', path: '/ViCAP homicides and Sexual Assaults', component: Vicap },
      { name: 'seekinginformation', path: '/seeking information', component: SeekingInformation},
      { name: 'home', path: '/', component:  Home},
]