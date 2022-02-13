<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <p v-if="errMessage">{{ errMessage }}</p>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//import { mapGetters } from 'vuex'
import AsyncValidator from "async-validator"
export default {
  name: "FormItem",
  components: {},
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  inject: ["form"],
  // 定义属性
  data() {
    return {
      errMessage:""
    };
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    validate() {
      if(!this.prop) return;
      // const rules = this.form.rules[this.prop]

      // this.form.model 是父组件的绑定对象数据
      console.log(this.form.rules)
      let value = this.form.model[this.prop]; 
      // this.from.rules 是父组件的校验规则
      let rules = this.form.rules[this.prop];
      let des = {[this.prop]: rules};
      let validator = new AsyncValidator(des);
      // validator.validate返回的是一个promise对象
      return validator.validate({[this.prop]:value},err=>{
        if(err){
          this.errMessage = err[0].message;
        }else{
          this.errMessage = ""
        }
      })
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$on("validate",()=>{
      this.validate()
    })
  },
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