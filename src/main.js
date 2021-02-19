import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

import EntityCard from './common/components/EntityCard';

const app = createApp(App)

app.use(Quasar, quasarUserOptions);
app.use(router);

app.component('entity-card', EntityCard);

app.mount('#app');
