import axios from "axios";


const  state = {
        userLogged : null,
        token:  localStorage.getItem('token') || null, // Salva il token in localStorage,
        error: null
    };

const  getters = {
        getUserLogged: (state) => state.userLogged,
        getToken: (state) => state.token,
        getError: (state) =>state.error
    };

const mutations = {
        setUserLogged (state, userLogged) { state.userLogged = userLogged},
        setToken (state,token) {
            state.token = token;
            localStorage.setItem('token', token); // Salva il token in localStorage
        },
        setError (state,error) {state.error = error},
        clearError(state) {state.error = null} // Imposta lo stato dell'errore su null
    };

const actions = {
        async login ({commit},credentials ){
            try {
                const response = await axios.post(process.env.VUE_APP_BASE_URI + 'login',credentials);
                commit("setUserLogged",response.data.user);
                commit("setToken",response.data.token);
                commit("clearError")
            }catch (e) {
                console.log(e.message);
                commit("setError",e.message)
            }

        }
    };

const modules = {};

export default {
    state,
    getters,
    mutations,
    actions,
    modules
};
