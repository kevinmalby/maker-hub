import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index';
import store from './store/index';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

import EntityCard from './common/components/EntityCard';
import RatingCard from './common/components/RatingCard';
import RoutableComponent from './common/components/RoutableComponent';
import AvatarChip from './common/components/AvatarChip';

const app = createApp(App)

app.use(Quasar, quasarUserOptions);
app.use(router);
app.use(store);

app.component('entity-card', EntityCard);
app.component('rating-card', RatingCard);
app.component('routable-component', RoutableComponent);
app.component('avatar-chip', AvatarChip);

app.mount('#app');
