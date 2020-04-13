<template>
  <div class="user_header">
    <div class="heade">
      <div class="header">
        <div class="search">
          <div class="black_img">
            <img src="/static/assets/category/go-hist.png" alt>
          </div>
          <div class="login">我的顺电</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.user_header {
  .heade {
    .header {
      height: 0.9rem;
      line-height: 0.9rem;
      width: 7.5rem;
      background: linear-gradient(#00ccee, #61e7fb);
      .search {
        display: flex;
        position: relative;

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
        .login {
          margin: 0 auto;
          font-size: 0.3rem;
          color: white;
        }
      }
    }
  }
}
</style>
