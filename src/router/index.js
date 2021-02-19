import { createRouter, createWebHistory } from 'vue-router';

import MakerProfile from '../modules/maker-profile/components/MakerProfile';
import MakerProjectsList from '../modules/maker-projects/components/MakerProjectsList';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/profiles/:id',
            name: 'MakerProfile',
            component: MakerProfile,
            meta: { layout: 'LayoutPrimary' },
            children: [
                {
                    path: 'projects',
                    component: MakerProjectsList
                }
            ]
        }
    ]
});