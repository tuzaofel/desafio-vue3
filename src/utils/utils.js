

import {useRouter} from 'vue-router';
import {useStore} from 'vuex';
import {ref} from 'vue';


export default function getUtilities() {
    return {
        router: useRouter(),
        store: useStore(),
        ref: ref,
    }
}; 