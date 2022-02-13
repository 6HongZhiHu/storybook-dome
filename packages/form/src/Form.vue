<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import { mapGetters } from 'vuex'

export default {
  name: "Form",
  components: {},
  // provide(){ //依赖注入数据 子代组件可以用inject接收数据
  //   return {
  //     form:this
  //   }
  // },
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  // 定义属性
  data() {
    return {};
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    validate(cb) {
      let tasks = this.$children //获取所有子组件
        .filter(item => item.prop) //过滤所有子组件 带prop属性的子组件
        .map(item => item.validate())//执行所有子组件的 validdate方法
      // tasks接收validate方法返回的promise对象
      console.log(tasks)
      Promise.all(tasks)
        .then(()=>cb(true))
        .catch(()=>cb(false))

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

<style lang='stylus' scoped></style>