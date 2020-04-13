//初始化数据厂库
const state = {
    user_name: '' || localStorage.getItem('user_name'),
    path:"/"
    
  }
  //getter 抛出去的数据
  const getters = {
    userName: (state) => state.user_name
  
  }
  
  //action 异步的操作
  const actions = {
  
  }
  
  //mutations修改state中的数据
  const mutations = {
    //当接受的参数为对象时用{},字符串时不用{}
    handleUserName: (state, user_name) => {
        state.user_name = user_name
          // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
        localStorage.setItem('user_name', user_name)
      },
      tcuser:(state)=>{
        state.user_name = ""

        state.path = "/login"
        // console.log(213213)
        // console.log(state.user_name)
        // console.log(typeof state.user_name)
        // console.log(window.localStorage.user_name)
        // console.log(window.localStorage.token)
        let bcd=window.localStorage;
        bcd.clear();

      //  console.log(this)
        // console.log(typeof bcd)
        // console.log(typeof window.localStorage.user_name)

      }
    }
  export default {
    state,
    mutations,
    actions,
    getters,
  };