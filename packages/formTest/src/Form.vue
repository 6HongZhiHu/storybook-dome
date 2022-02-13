<template>
  <hzh-form class="form" ref="form" :model="user" :rules="rules">
    <hzh-item label="用户名" prop="username">
      <hzh-input
        :value="user.username"
        @input="user.username = $event"
        placeholder="请输入用户名"
      >
      </hzh-input>
    </hzh-item>
    <hzh-item label="密码" prop="password">
      <hzh-input type="password" v-model="user.password"></hzh-input>
    </hzh-item>
    <hzh-item>
      <button type="primary" @click="login">登 录</button>
    </hzh-item>
  </hzh-form>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import { mapGetters } from 'vuex'
import HzhForm from "./form/Form.vue";
import HzhItem from "./form/FormItem.vue";
import HzhInput from "./form/Input.vue";
// import HzhButton from "./form/Button.vue";
export default {
  components: {
    HzhForm,
    HzhItem,
    HzhInput,
    // HzhButton,
  },
  // 定义属性
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
          },
          {
            min: 6,
            max: 12,
            message: "请输入6-12位密码",
          },
        ],
      },
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    login() {
      console.log("button");
      // return false;
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style>
  .form {
    width: 30%;
    margin: 150px auto;
  }
</style>
<style lang='stylus' scoped></style>