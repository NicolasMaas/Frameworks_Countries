import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: null,
    country: null
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
    },

    setCountry(state, payload) {
      state.country = payload;
    },
  },
  actions: {
    getCountries: async function ({
      commit
    }) {
      const request = await fetch('https://restcountries.eu/rest/v2/alpha?codes=aus;be;bra;ca;chn;cz;es;fra;de;hu;ind;ita;jpn;me;nl;pl;ro;ru;sg;se;ch;ua;gb;usa', {
        method: 'GET'
      });
      const data = await request.json();
      commit('setCountries', data)
    },

    getCountry: async function ({
      commit
    }, code) {
      const request = await fetch(`https://restcountries.eu/rest/v2/alpha?codes=${code}`, {
        method: 'GET'
      });
      const data = await request.json();
      commit('setCountry', data)
    }
  }
})