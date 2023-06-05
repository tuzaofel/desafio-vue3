
import {createStore} from 'vuex';

const store = createStore({
    state () {
      return {
        currentPlan: 0
      }
    },
    mutations: {
        setPlan (state, planIndex) {
          state.currentPlan = planIndex
      }
    }
  })

  export default store;