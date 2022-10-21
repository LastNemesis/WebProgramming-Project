import { createStore } from 'vuex'

const store = createStore({
    state: {
      userName: "Nobody is logged at the moment",
      MySALObj: null
    },
    
    mutations: {
      increment (state, NewuserName) {
        state.userName = NewuserName
      },

      changeMySALObj (state, MySALObj) {
        state.MySALObj = MySALObj
      },
    }
})

export default store;