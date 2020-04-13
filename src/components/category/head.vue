<template>
  <div class="head_conten">
    <div class="header">
      <div class="search">
        <div class="black_img">
          <img src="/static/assets/category/go-hist.png" alt />
        </div>
        <div class="search_frame">
          <form>
            <div class="put">
              <input type="text" />
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="category">
      <div class="content">
        <div class="content_left">
          <ul>
            <li
              v-for="(item,index) in items"
              :key="item.id"
              @click="toggle(index)"
              :class="flag==index?'active':''"
            >
              {{item.text}}
            </li>
          </ul>
        </div>
        <div class="content_right">
          <ul>
            <li
              class="title_li"
              v-for="(itema,indexa) in infos"
              :key="itema.id"
              :class="flag==indexa?'active_two  ':''"
            >
              <a href="javascript:">
                <img :src="itema.title_img" alt />
              </a>
              <ul v-for="itemab in itema.list" :key="itemab.id">
                <div class="right_title">{{itemab.title_text}}</div>
                <li v-for="(itemaa,index) in itemab.infoss" :key="itemaa.id" @click="lists(itemaa)">
                  <div class="small_info">
                    <img :src="itemaa.img" alt />
                    <p>{{itemaa.text}}</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "heade",
  data() {
    return {
      flag: 0,
      infos:[],
      items:[]
    };
  },
  methods: {
    toggle: function(index) {
      this.flag = index;
    },
    lists(index){
      console.log(index.id)
      this.$router.push({
        path:"/CategoryList" ,
        query:{ arr:index.id }
      });
      
    }
  },
  created() {
    axios.get("/static/data2.json").then(response => {
      this.infos = response.data.data.info;
      this.items=response.data.data.items;
    });
  }
};
</script>
<style lang="scss">
.head_conten {
  .header {
    height: 0.9rem;
    line-height: 0.9rem;
    width: 7.5rem;
    background: linear-gradient(#00ccee, #61e7fb);
    position: fixed;
    .search {
      display: flex;
      .black_img {
        height: 0.9rem;
        position: relative;
        left: 4%;
        line-height: 0.9rem;
        img {
          height: 0.4rem;
          vertical-align: middle;
          position: absolute;
          top: 0.25rem;
        }
      }
      .search_frame {
        width: 80%;
        margin: auto;
        height: 0.9rem;
        form {
          .put {
            margin: 8px 5% 8px 7%;
            height: 0.6rem;
            position: relative;
            input {
              &:nth-child(1) {
                border: none;
                width: 96%;
                height: 0.6rem;
                position: absolute;
                border-radius: 0.4rem;
                padding-left: 0.6rem;
                caret-color: #00ccee;
                font-size: 0.1px;
              }
              &:nth-child(2) {
                zoom: 1.5;
                font-size: 0;
                background: url(/static/assets/category/index-search.png)
                  no-repeat;
                border: none;
                background-size: 10px;
                position: absolute;
                left: 8px;
                top: 7px;
              }
            }
          }
        }
      }
    }
  }
  .category {
    padding-top: 0.7rem;
    height: 100%;
    .content {
      min-height: 13rem;
      padding-top: 0.2rem;
      display: flex;
      overflow-x: hidden;
      overflow-y: auto;
      // height:100vh;
      .content_left {
        width: 21%;
        position: fixed;
        height: 90vh;
        background: #e0e0e2;
        ul {
          list-style: none;
          li {
            width: 1.6rem;
            height: 0.7rem;
                line-height: 0.7rem;
            text-align: center;
            border-right: 1px solid #e1e1e3;
            border-bottom: 1px solid #e0e0e2;
              font-size: 0.25rem;
            span {
              display: inline-block;
              font-size: 0.25rem;
              width: 100%;
            }
          }
        }
      }
      .content_right {
        background: white;
        // width: 100%;s
        padding: 0.2rem;
            width: 73%;
            margin-left: 1.6rem;  
        // height: 50.6rem;
        // height: 100%;
        ul {
          list-style: none;
          clear: both;
          .title_li {
            display: none;
            a {
              text-decoration: none;
              // display: -webkit-box;
              display: flex;
              img {
                max-height: 1.6rem;
                width: 100%;
                vertical-align: middle;
              }
            }
            .right_title {
              height: 0.54rem;
              font-size: 0.26rem;
              color: #313131;
              line-height: 0.62rem;
              text-align: left;
              float: left;
              width: 100%;
              margin-bottom: 0.2rem;
            }
            ul {
              // padding: 0.2rem;
              padding-bottom: 0;
              padding-top: 0;
              overflow: hidden;
              li {
                width: 1.5rem;
                margin: 0 2.9%;
                float: left;
                margin-bottom: 0.2rem;
                // height: 2rem;
                .small_info {
                  width: 100%;
                  text-align: center;
                  height: 1.6rem;
                  line-height: 0.8rem;
                  img {
                    width: 1rem;
                    height: 1rem;
                    vertical-align: middle;
                  }
                  p {
                    font-size: 0.2rem;
                    text-align: center;
                    // font-size: 13px;s
                    color: #313131;
                    line-height: 0.3rem;
                    height: 0.3rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin: 0;
                    margin-top: 0.1rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .active {
    background: white;
    border-right: 2px solid red !important;
    color: tomato;
    // display: block !important;
  }
  .active_two {
    display: block !important;
  }
}
</style>