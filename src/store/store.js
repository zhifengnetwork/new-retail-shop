import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个store仓库,使用export公开，其他地方可引用
const store =  new Vuex.Store({
    //strict:true,//严格模式
    // 状态(一般保存数据)
    state:{
        token:0
    },

    // mutations 类似事件
    mutations:{
        set_token(state,token){
            state.token =token
            sessionStorage.token =token
        },
        del_token(state){
            state.token = ''
            sessionStorage.removeItem('token')
        }
    },
    //获取共享数据
    getters:{
         
     },
  });
  
  export default store;