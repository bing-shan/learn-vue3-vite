<template>
  <footer class="app_footer">
    <!-- 鑱旂郴鎴戜滑 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>瀹㈡埛鏈嶅姟</dt>
          <dd><i class="iconfont icon-kefu"></i> 鍦ㄧ嚎瀹㈡湇</dd>
          <dd><i class="iconfont icon-question"></i> 闂鍙嶉</dd>
        </dl>
        <dl>
          <dt>鍏虫敞鎴戜滑</dt>
          <dd><i class="iconfont icon-weixin"></i> 鍏紬鍙</dd>
          <dd><i class="iconfont icon-weibo"></i> 寰崥</dd>
        </dl>
        <dl>
          <dt>涓嬭浇APP</dt>
          <dd class="qrcode"><img src="@/assets/images/qrcode.jpg"/></dd>
          <dd class="download">
            <span>鎵弿浜岀淮鐮</span>
            <span>绔嬮┈涓嬭浇APP</span>
            <a href="javascript:;">涓嬭浇椤甸潰</a>
          </dd>
        </dl>
        <dl>
          <dt>鏈嶅姟鐑嚎</dt>
          <dd class="hotline">400-0000-000 <small>鍛ㄤ竴鑷冲懆鏃?8:00-18:00</small></dd>
        </dl>
      </div>
    </div>
    <!-- 鍏跺畠 -->
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="javascript:;">
            <i class="iconfont icon-footer01"></i>
            <span>浠锋牸浜叉皯</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer02"></i>
            <span>鐗╂祦蹇嵎</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer03"></i>
            <span>鍝佽川鏂伴矞</span>
          </a>
        </div>
        <!-- 鐗堟潈淇℃伅 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">鍏充簬鎴戜滑</a>
            <a href="javascript:;">甯姪涓績</a>
            <a href="javascript:;">鍞悗鏈嶅姟</a>
            <a href="javascript:;">閰嶉€佷笌楠屾敹</a>
            <a href="javascript:;">鍟嗗姟鍚堜綔</a>
            <a href="javascript:;">鎼滅储鎺ㄨ崘</a>
            <a href="javascript:;">鍙嬫儏閾炬帴</a>
          </p>
          <p>CopyRight 漏 灏忓厰椴滃効</p>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.app_footer {
  overflow: hidden;
  background-color: #f5f5f5;
  padding-top: 200px;

  .contact {
    background: #fff;

    .container {
      padding: 60px 0 40px 25px;
      display: flex;
    }

    dl {
      height: 190px;
      text-align: center;
      padding: 0 65px;
      border-right: 1px solid #f2f2f2;
      color: #999;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        border-right: none;
        padding-right: 0;
      }
    }

    dt {
      line-height: 1;
      font-size: 18px;
    }

    dd {
      margin: 36px 12px 0 0;
      float: left;
      width: 92px;
      height: 92px;
      padding-top: 10px;
      border: 1px solid #ededed;

      .iconfont {
        font-size: 36px;
        display: block;
        color: #666;
      }

      &:hover {
        .iconfont {
          color: $xtxColor;
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .qrcode {
      width: 92px;
      height: 92px;
      padding: 7px;
      border: 1px solid #ededed;
    }

    .download {
      padding-top: 5px;
      font-size: 14px;
      width: auto;
      height: auto;
      border: none;

      span {
        display: block;
      }

      a {
        display: block;
        line-height: 1;
        padding: 10px 25px;
        margin-top: 5px;
        color: #fff;
        border-radius: 2px;
        background-color: $xtxColor;
      }
    }

    .hotline {
      padding-top: 20px;
      font-size: 22px;
      color: #666;
      width: auto;
      height: auto;
      border: none;

      small {
        display: block;
        font-size: 15px;
        color: #999;
      }
    }
  }

  .extra {
    background-color: #333;
  }

  .slogan {
    height: 178px;
    line-height: 58px;
    padding: 60px 100px;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between;

    a {
      height: 58px;
      line-height: 58px;
      color: #fff;
      font-size: 28px;

      i {
        font-size: 50px;
        vertical-align: middle;
        margin-right: 10px;
        font-weight: 100;
      }

      span {
        vertical-align: middle;
        text-shadow: 0 0 1px #333;
      }
    }
  }

  .copyright {
    height: 170px;
    padding-top: 40px;
    text-align: center;
    color: #999;
    font-size: 15px;

    p {
      line-height: 1;
      margin-bottom: 20px;
    }

    a {
      color: #999;
      line-height: 1;
      padding: 0 10px;
      border-right: 1px solid #999;

      &:last-child {
        border-right: none;
      }
    }
  }
}

</style>