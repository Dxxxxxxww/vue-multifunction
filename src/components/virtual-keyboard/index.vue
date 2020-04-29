<template>
  <div class="wa">
    <input type="text" id="input" v-model="value" />
    <div class="container">
      <div class="keyboard-wapper" id="container">
        <div class="left">
          <div class="box" v-for="item of 9" :key="item">
            <span
              @touchstart.prevent="beforeInputMoney"
              @touchend.prevent="inputMoney($event, item)"
              >{{ item }}</span
            >
          </div>
          <div class="box" style="width: calc(50vw - 2px);">
            <span
              @touchstart.prevent="beforeInputMoney"
              @touchend.prevent="inputMoney($event, 0)"
              >0</span
            >
          </div>
          <div class="box">
            <span
              @touchstart.prevent="beforeInputMoney"
              @touchend.prevent="inputMoney($event, '.')"
              >.</span
            >
          </div>
        </div>
        <div class="right">
          <div class="box">
            <span
              class="delete-wrapper"
              :class="{ actived }"
              @touchstart.prevent="beforeDeleteMoney"
              @touchend.prevent="deletedMoney"
            >
              <span class="del-icon"><i class="icon">×</i></span></span
            >
          </div>
          <div class="box" style="height: 27vh; line-height: 27vh;">
            <span
              class="finish"
              @touchstart.prevent="beforeFinish"
              @touchend.prevent="finished"
              >完成</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { log } = console
export default {
  name: 'VKeyboard',
  data() {
    return {
      value: '',
      actived: false
    }
  },
  methods: {
    beforeInputMoney(e) {
      e.target.classList.add('actived')
    },
    inputMoney(e, v) {
      e.target.classList.remove('actived')
      const num = v
      let money = this.value
      let value = money
      if (num === '.') {
        if (value === '') {
          log('a')
          money = '0.'
        } else {
          if (value.includes('.')) {
            log('b')
            money = value
          } else {
            log('c')
            money = value.toString() + num.toString()
          }
        }
      } else {
        value = value.toString() + num.toString()
        if (value.includes('.')) {
          log('d')
          money = value.substr(0, value.indexOf('.') + 3)
        } else {
          money = parseFloat(value)
            .toString()
            .substr(0, 16)
          log('e')
        }
      }
      this.value = money
    },
    beforeDeleteMoney(e) {
      this.actived = true
      // e.target.classList.add('actived')
    },
    deletedMoney(e) {
      // e.target.classList.remove('actived')
      this.actived = false
      var money = this.value
      money = money.substr(0, money.length - 1)
      this.value = money
    },
    beforeFinish(e) {
      e.target.classList.add('finish-actived')
    },
    finished(e) {
      e.target.classList.remove('finish-actived')
      // close()
    },
    getTotalFee() {
      // var value = ''
      // if (ua.indexOf('Alipay') > 0) {
      // value = totalFee1.value
      // } else if (ua.indexOf('MicroMessenger') > 0) {
      // value = totalFee2.value
      // }
      // console.log(input.value)
      return this.value
      // return value
    },
    setTotalFee(value) {
      // if (ua.indexOf('Alipay') > 0) {
      // totalFee1.value = value
      // input.value = value
      // } else if (ua.indexOf('MicroMessenger') > 0) {
      // totalFee2.value = value
      // input.value = value
      // }
      this.value = value
    }
  }
}
</script>

<style scoped>
.wa {
  width: 100%;
}
.container {
  /* position: fixed; */
  width: 100vw;
  height: 38vh;
  bottom: 0;
  left: 0;
  margin: 0;
  z-index: 999;
  background-color: #ddd;
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  user-select: none;
  -webkit-user-select: none; /*webkit浏览器*/
  /* -khtml-user-select: none; 早期浏览器 */
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
}

/*设置页面长按不可复制粘贴，但是iOS上出现input、textarea不能输入，因此将使用-webkit-user-select:auto;*/
input,
textarea {
  -webkit-user-select: auto; /*webkit浏览器*/
  margin: 0px;
  padding: 0px;
  outline: none;
}

.keyboard-wapper {
  display: flex;
  flex-direction: row;
  width: 100vw;
  margin-bottom: 2vh;
  padding: 0 0 4px 4px;
  box-sizing: border-box;
  background-color: #ddd;
}
.left {
  display: flex;
  flex-wrap: wrap;
  width: calc(75vw - 3px);
  height: 36vh;
  background-color: #ddd;
}
.right {
  display: flex;
  flex-wrap: wrap;
  width: calc(25vw - 1px);
  background-color: #ddd;
}
.box {
  width: calc(25vw - 1px);
  height: 9vh;
  line-height: 9vh;
  text-align: center;
  padding: 4px 4px 0 0;
  box-sizing: border-box;
  font-size: 0;
}
.box > span {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  font-size: 16px;
  background-color: #fff;
}
.color {
  color: red;
}
.box span.actived {
  background-color: #eee !important;
}
.box span.finish {
  background-color: #ff8d00;
}
.hidden {
  display: none;
}
.box span.delete-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.del-icon {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  transform: translate3d(5px, 0, 0);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border: 1px solid #ccc;
  color: #fff;
  background-color: #ccc;
  font-style: normal;
}
.del-icon::before {
  content: '';
  position: absolute;
  left: -21px;
  bottom: 0;
  display: block;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #ccc;
}
/* .del-icon::after {
  content: '';
  position: absolute;
  left: -17px;
  bottom: 0;
  display: block;
  width: 0;
  height: 0;
  border-radius: 2px;
  border-left: 9px solid transparent;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-right: 9px solid #fff;
} */
i.icon {
  position: relative;
  font-style: normal;
}

.finish-actived {
  background-color: #ff6f22 !important;
}
</style>
