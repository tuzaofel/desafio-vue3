
import {createStore} from 'vuex';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state () {
      return {
        currentPlan: 0,
        auth: {
          authorized: false,
          username: "",
          token:""
        },
        theme:{
          buttonColor: "#f30168",
          backgroundColor: "#fafafc"
        },
        formData: {},
      }
    },
    mutations: {
        setPlan (state, planIndex) {
          state.currentPlan = planIndex
      },

        login (state, username, token) {
          state.auth.authorized = true;
          state.auth.username = username;
          state.auth.token = token;
      },

        logout (state) {
          state.auth.authorized = false;
          state.auth.username = "";
          state.auth.token = "";
      },
        setButtonColor(state, color) {
          state.theme.buttonColor = color
      },

        saveFormData(state, formData){
          state.formData = JSON.stringify(formData)
        }
    },
    plugins: [createPersistedState()],
  })

  export default store;