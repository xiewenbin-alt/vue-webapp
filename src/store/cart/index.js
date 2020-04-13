//初始化数据厂库
const state = {
  //购物车里的商品数量
  count: 0,
  //购物车的商品列表
  addCart: []
}
//getter 抛出去的数据
const getters = {
  //购物车的列表
  cartDataList: state => {
    console.log(state.addCart)
    return state.addCart;
  },

}

//action 异步的操作
const actions = {
  addToCart({commit}, item) {
    commit('addToCart', {item})
  },
}

//mutations修改state中的数据
const mutations = {
  //当接受的参数为对象时用{},字符串时不用{}
  addToCart(state, {item}) 
  { 
    console.log(item.id)
    //根据判断购物车里是否有同样的商品
    let recordProduct = state.addCart.find(n => n.id === item.id)
    console.log(recordProduct)
    //购物车不存在的商品
    if(!recordProduct){
      state.addCart.push({
        id: item.id,
        img: item.Img[0],
        price: item.price,
        name:item.info_name,
        num: item.num
      }, 
    )
    }else{
      recordProduct.num++
    }
   
  }

}

export default {
  state,
  mutations,
  actions,
  getters,
};