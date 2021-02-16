import { createRouter, createWebHistory } from 'vue-router';

import MakerProfile from '../modules/maker-profile/components/MakerProfile';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'MakerProfile',
            component: MakerProfile,
            meta: { layout: 'LayoutPrimary' }
        }
    ]
});