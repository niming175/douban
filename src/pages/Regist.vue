<template>
  <div>
    <p>Login</p>
    <el-form :model="loginForm" :rules="checkRule" ref="loginForm" >
      <el-form-item label="邮箱" prop="email">
        <el-input type="email" v-model="loginForm.email" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="confPass">
        <el-input type="password" v-model="loginForm.confPass" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="login('loginForm')" :disabled="valid">Login</el-button>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'

export default {
  name: 'regist',
  data () {
    var checkPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else if (value.length < 6 || value.length > 18) {
        return callback(new Error('密码长度在6-18之间'))
      } else {
        callback()
      }
    }
    var checkPass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.loginForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        email: '',
        password: '',
        confPass: ''
      },
      checkRule: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur, change' }
        ],
        password: { validator: checkPass, trigger: 'blur, change' },
        confPass: { validator: checkPass2, trigger: 'blur, change' }
      }
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  computed: {
    valid: function () {
      let validator = new AsyncValidator(this.checkRule)
      let result = false
      validator.validate(this.loginForm, (errors) => {
        if (!errors) {
          result = true
        }
      })
      return result
    }
  }
}
</script>
