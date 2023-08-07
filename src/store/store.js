import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import moduleA from "./module/moduleA";
import moduleB from "./module/moduleB";

const state ={
    username: '管理员',
    userState: 0
};

const mutations = {
    setUser(state, name) {
        state.username = name
    },
    setUserState(state, data){
        state.userState += data
    }
};

const getters = {
    getUserState(state){
        let data;
        if (state.userState === 0){
            data = '无效'
        }else {
            data = state.userState + '级'
        }
        return data;
    }
};

const modules = {
    a:moduleA,
    b:moduleB
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    modules
})

