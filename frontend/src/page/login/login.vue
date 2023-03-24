<template>
  <div id="login">
    <div class="infor">
      <div class="infor-header">
        <router-link to="/">
          <img src="../../assets/image/logo/topcv-logo.webp" alt="" /></router-link>
        <h2 v-if="loginOrSingin">Chào mừng bạn trở lại,</h2>
        <h2 v-if="!loginOrSingin">Chào mừng bạn đến với TopCV</h2>
        <p>
          Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
          tưởng
        </p>
      </div>
      <div class="infor-contain">
        <div class="components-input-demo-presuffix">
          <br>
          <div v-if="!loginOrSingin">
            <h4><b>Full Name</b></h4>
            <Input ref="name" placeholder='Nguyen Van A' type='text' cssColorBorder='greenBorder' cssColor='greenColor'>
            <template #left>
              <user-outlined />
            </template>
            </Input>
          </div>
          <br>
          <div>
            <h4><b>Email</b></h4>
            <Input ref="email" placeholder='Nhập email' type='text' cssColorBorder='greenBorder' cssColor='greenColor'>
            <template #left>
              <mail-outlined />
            </template>
            </Input>
          </div>
          <br>
          <div>
            <h4><b>Pass word</b></h4>
            <Input ref="pass" placeholder='Password' :type='password' cssColorBorder='greenBorder' cssColor='greenColor'>
            <template #left>
              <lock-outlined />
            </template>
            <template #right>
              <span v-if="isShowPass" @click="ShowPass('password')"><eye-outlined /></span>
              <span v-if="!isShowPass" @click="ShowPass('text')"><eye-invisible-outlined /></span>
            </template>
            </Input>
          </div>
          <br>
          <div v-if="!loginOrSingin">
            <h4><b>Repeate password</b></h4>
            <Input ref="repass" placeholder='repeate password' :type='password' cssColorBorder='greenBorder'
              cssColor='greenColor'>
            <template #left>
              <lock-outlined />
            </template>
            <template #right>
              <!-- <span v-if="isShowPass"><eye-outlined /></span>
            <span v-if="!isShowPass"><eye-invisible-outlined /></span> -->
            </template>
            </Input>
          </div>
          <br>
        </div>

        <p class="infor-contain_accept" v-if="!loginOrSingin">
          Bằng việc đăng ký tài khoản, bạn đã đồng ý với
          <a href="#"><b>Điều khoản dịch vụ</b></a> và
          <a href="#"><b>Chính sách bảo mật</b></a> của chúng tôi
        </p>
        <div class="infor-contain_login">
          <Button content="Đăng nhập" nodataCSS="btn_green" @click="submitLogin" />
          <p>Hoặc</p>
          <div class="infor-contain_login-social">
            <button class="facebook btn_green">
              <FacebookOutlined class="display-none_1225" /> Facebook
            </button>
            <button class="google btn_green">
              <GoogleOutlined class="display-none_1225" /> Google
            </button>
            <button class="linkedin btn_green">
              <AppleOutlined class="display-none_1225" />Linkedin
            </button>
          </div>
        </div>
        <div class="infor-contain_forget" v-if="loginOrSingin">
          <p>
            Bạn chưa có tài khoản? <a href="#"><B>Đăng ký ngay</B></a>
          </p>
          <p>
            <a href="#"><b>Quên mật khẩu</b></a>
          </p>
        </div>
        <div class="infor-contain_forget" v-if="!loginOrSingin">
          <p>
            Bạn đã có tài khoản? <a href="#"><b>Đăng nhập ngay</b></a>
          </p>
        </div>
        <div>
          <p><b>Bạn gặp khó khăn khi tạo tài khoản?</b></p>
          <p>Vui lòng gọi tới số (024) 6680 5588 (giờ hành chính).</p>
        </div>
      </div>
    </div>
    <div class="carouse">
      <drawer />
    </div>
  </div>
</template>

<script>
import {
  GoogleOutlined,
  FacebookOutlined,
  AppleOutlined,
  MailOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  UserOutlined
} from '@ant-design/icons-vue';
import './login.scss';
import drawer from '@/components/Carousel/carousel.vue';
import Button from '@/components/Button/Button.vue';
import Input from "@/components/input/Input.vue"
export default {
  data() {
    return {
      loginOrSingin: true,
      isShowPass: false,
      password: 'password',
      form: {
        name: '',
        email: '',
        password: '',
      }
    };
  },
  methods: {
    submitLogin() {
      if (this.loginOrSingin) {
        console.log(this.$refs.email.value);
        console.log(this.$refs.pass.value);
      } else {
        console.log(this.$refs.name.value);
        console.log(this.$refs.email.value);
        console.log(this.$refs.pass.value);
        console.log(this.$refs.repass.value);
      }
    },
    ShowPass(state) {
      this.isShowPass = !this.isShowPass
      this.password = state
    }
  },
  created() {
    if (this.$route.name == 'login') {
      this.loginOrSingin = true;
    }
    if (this.$route.name == 'sign-up') {
      this.loginOrSingin = false;
    }
  },
  components: {
    drawer,
    GoogleOutlined,
    FacebookOutlined,
    AppleOutlined,
    Button,
    Input,
    MailOutlined,
    LockOutlined,
    EyeInvisibleOutlined,
    EyeOutlined,
    UserOutlined,
  },
};
</script>