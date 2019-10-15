import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: null,
    ratings: null
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    getCountries: async function ({
      commit
    }) {
      const request = await fetch('https://restcountries.eu/rest/v2/alpha?codes=aus;be;bra;ca;chn;cz;es;fra;de;hu;ind;ita;jpn;me;nl;pl;ro;ru;sg;se;ch;ua;gb;usa', {
        method: 'GET'
      });

      let response = await request.json();

      let data = [];

      response.forEach((d) => {

        d.rating = 0

        if (localStorage.getItem('ratings')) {
          let reviews = localStorage.getItem('ratings');

          JSON.parse(reviews).forEach((r) => {
            if (d.alpha2Code == r.country) {
              d.rating = r.rating;
            }
          })
        }

        data.push(d);

      })

      commit('setCountries', data)
    },
  }
})