<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handleInput" />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import { mapGetters } from 'vuex'

export default {
  name: "Input",
  inheritAttrs: false, //不希望子组件的根标签继承父组件传入的dom属性
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleInput(e){
      this.$emit("input",e.target.value) //触发由父组件传入的input事件
      const findParent = parent =>{
        while (parent){
          if(parent.$options.name === "FormItem"){
            break
          }else{
            parent = parent.$parent
          }
        }
        return parent
      } //这个方法是寻找父组件是否是formItem的 如果不是继续向上寻找
      const parent = findParent(this.$parent); //如果找到了对应的父组件
      if(parent){
        parent.$emit("validate")//触发父组件的校验方法
      }
    }
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