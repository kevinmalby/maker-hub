import { createStore } from 'vuex';

import getters from './getters';

const store = createStore({
    state() {
        return {
            userId: 1
        }
    },
    getters
});

export default store;