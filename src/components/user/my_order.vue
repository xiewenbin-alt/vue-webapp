<template>
  <div class="my_order">
    <div class="new_order">
      <a href="javascript:">
        <div class="timpe">
          <div class="timpe_img">
            <img src="/static/assets/user/05.png" alt />
          </div>
          <div class="timpe_title">我的订单</div>
          <div class="timpe_text">
            查看全部订单
            <div class="right_img">
              <img src="/static/assets/user/06.png" alt />
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="my_waitindex">
      <div class="one_info">
        <a href="javascript:">
          <div class="img">
            <img src="/static/assets/user/07.png" alt />
          </div>
          <p>代付款</p>
        </a>
      </div>
      <div class="one_info">
        <a href="javascript:">
          <div class="img">
            <img src="/static/assets/user/08.png" alt />
          </div>
          <p>代收货</p>
        </a>
      </div>
      <div class="one_info">
        <a href="javascript:">
          <div class="img">
            <img src="/static/assets/user/09.png" alt />
          </div>
          <p>代评价</p>
        </a>
      </div>
      <div class="one_info">
        <a href="javascript:">
          <div class="img">
            <img src="/static/assets/user/10.png" alt />
          </div>
          <p>售后</p>
        </a>
      </div>
    </div>
    <div class="care_bottom"></div>
    <div class="my_waitindex">
      <div class="one_info">
        <a href="javascript:">
          <div class="img">
            <img src="/static/assets/user/11.png" alt />
          </div>
          <p>我的积分</p>
        </a>
      </div>
      <div class="one_info">
        <a href="javascript:">
          <div class="img">
            <img src="/static/assets/user/12.png" alt />
          </div>
          <p>主题馆</p>
        </a>
      </div>
      <div class="one_info">
        <a href="javascript:">
          <div class="img">
            <img src="/static/assets/user/13.png" alt />
          </div>
          <p>客服中心</p>
        </a>
      </div>
      <div class="one_info">
        <a href="javascript:">
          <div class="img">
            <img src="/static/assets/user/14.png" alt />
          </div>
          <p>个人中心</p>
        </a>
      </div>
    </div>
    <div class="care_bottom"></div>
    <div class="my_integralindex"></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.my_order {
  .new_order {
    width: 100%;
    height: 32px;
    line-height: 32px;
    border-bottom: 1px solid #dadada;
    a {
      text-decoration: none;
      .timpe {
        padding: 0px 2% 0px 3%;
        height: 32px;
        position: relative;
        // border-bottom: 1px solid #dadada;
        .timpe_img {
          height: 32px;
          overflow: hidden;
          float: left;
          img {
            vertical-align: middle;
            width: 16px;
            margin-bottom: 0.25rem;
          }
        }
        .timpe_title {
          font-size: 0.3rem;
          color: black;
        }
        .timpe_text {
          font-size: 0.24rem;
          color: #dadada;
          position: absolute;
          top: 0;
          right: 30px;
          .right_img {
            position: absolute;
            /* left: 63px; */
            top: 0rem;
            right: -0.2rem;
            img {
              width: 0.45em;
            }
          }
        }
      }
    }
  }
  .my_waitindex {
    display: flex;
    justify-content: space-around;
    .one_info {
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      text-align: center;
      color: #313131;
      font-size: 12px;
      position: relative;
      width: 1.885rem;
      a {
        text-decoration: none;
        color: #333;
        .img {
          position: relative;
          height: 43px;
          line-height: 43px;
          img {
            vertical-align: middle;
            max-width: 2.5em;
          }
        }
        p {
          font-weight: 400;
          margin-top: 0;
        }
      }
    }
  }
  .care_bottom {
    background-color: #e9e9e9;
    width: 100%;
    height: 5px;
    clear: both;
  }
}
</style>
