<script setup>

</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="true">
          <li>
            <a href="javascript:;"><i class="iconfont icon-user"></i>鍛ㄦ澃浼?</a>
          </li>
          <li>
            <el-popconfirm title="纭閫€鍑哄悧?" confirm-button-text="纭" cancel-button-text="鍙栨秷">
              <template #reference>
                <a href="javascript:;">閫€鍑虹櫥褰</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">鎴戠殑璁㈠崟</a></li>
          <li><a href="javascript:;">浼氬憳涓績</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;">璇峰厛鐧诲綍</a></li>
          <li><a href="javascript:;">甯姪涓績</a></li>
          <li><a href="javascript:;">鍏充簬鎴戜滑</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  name: "Nav"
}
</script>

<style lang="scss" scoped>
.app-topnav {
  background: #333;

  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;

    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}

</style>