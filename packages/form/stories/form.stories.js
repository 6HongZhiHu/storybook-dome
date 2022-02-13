// console.log("xxx")
import HzhForm from "../index";
import HzhItem from "../../formItem"
import HzhInput from "../../Input"
// import HzhForm from "../../form"
// console.log(HzhInput)
export default {
  title: "HzhForm",
  component: HzhForm
}

export let Text = () => ({

  components: {
    HzhForm,
    HzhItem,
    HzhInput
  },
  template: `
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
  `,
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [{
          required: true,
          message: "请输入用户名",
        }, ],
        password: [{
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

})