/**
 * 个人中心板块中的公共状态组件
 */
import *as types from './types'
export default {
    // 命名空间
    namespaced:true,
     state:{
         item:{name:'刘子岳'},
         list:{}
     },
     getters:{
        item:state => state.item,
     },
     mutations:{
        [types.SET_RX] (state, playload) {
            state.item = {...state.item, ...playload}
        },
     }
   
}