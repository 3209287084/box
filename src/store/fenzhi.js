/**
 * 个人中心板块中的公共状态组件
 */
import *as types from './type'
export default {
    // 命名空间
    namespaced:true,
     state:{
         item:{name:'刘子岳',value:'17611035800'},
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