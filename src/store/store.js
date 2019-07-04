import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建一个store仓库,使用export公开，其他地方可引用
const store =  new Vuex.Store({
    //strict:true,//严格模式
    // 状态(一般保存数据)
    state:{
        // token:0
        userInfo:{
            Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '' 

        }
        
    },

    // mutations 类似事件
    mutations:{
        set_token(state,user){
            state.userInfo.Authorization = user.Authorization;//TOKEN
            localStorage.setItem('Authorization', user.Authorization);
        },
        userInfo(state, user){
            state.userInfo.usin = JSON.stringify(user);
            localStorage.setItem('usin', JSON.stringify(user));
        },
        del_token(state){
            state.userInfo.Authorization = ''
            localStorage.removeItem('Authorization');
        }
    },
    //获取共享数据
    getters:{
        optuser:function(state){
            return state.userInfo
        }
     },
  });
  
  export default store;