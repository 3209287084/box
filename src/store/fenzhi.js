/**
 * 个人中心板块中的公共状态组件
 */
import *as types from './type'
export default {
    // 命名空间
    namespaced:true,
     state:{
         item:{name:'刘子岳可真帅不一样歌剧院',key:1,ios:"17611035880",a:"硕大的"},
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