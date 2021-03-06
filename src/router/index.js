import { createRouter, createWebHistory } from 'vue-router';

import MakerProfile from '../pages/MakerProfile';
import MakerProject from '../pages/MakerProject';
import MakerProjectsList from '../modules/maker-profile/components/MakerProjectsList';

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
        },
        {
            path: '/projects/:id',
            component: MakerProject,
            meta: { layout: 'LayoutPrimary' }
        }
    ]
});