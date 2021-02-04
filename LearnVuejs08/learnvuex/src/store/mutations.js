import Vue from "vue";

import {
  INCREMENT
} from "./mutations-typs";

export default {
  // 方法
  [INCREMENT](state){
    state.counter ++
  },
  decrement(state){
    state.counter --
  },
  incrementCount(state, payload){
    state.counter += payload.count
  },
  addStudent(state, stu){
    state.students.push(stu)
  },
  updateInfo(state){
    // state.info.name = 'codewhy'
    // state.info['address'] = '洛杉矶'
    // Vue.set(state.info, 'address', '洛杉矶')
    // 该方式做不到响应式
    // delete state.info.age
    // 响应式
    Vue.delete(state.info, 'age');
  }
}
