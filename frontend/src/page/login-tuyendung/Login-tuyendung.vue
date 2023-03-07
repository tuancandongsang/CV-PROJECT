<template>
  <div class="login-tuyendung">
    <div class="infor">
      <div class="infor-header">
        <router-link to="/">
          <img src="../../assets/image/logo-tuyendung/logo-tuyendung.webp" alt="" /></router-link>
        <h2>Chào mừng bạn đã quay trở lại,</h2>
        <p>
          Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ
          tuyển dụng ứng dụng sâu AI & Hiring Funnel
        </p>
      </div>
      <div class="infor-contain">
        <div class="infor-contain-input">
          <Input ref="email" placeholder='tuancandongsang@gmail.com' type='text' cssColorBorder='greenBorder' cssColor='greenColor'
            lable='Email'>
          <template #left>
            <mail-outlined />
          </template>
          <template #right>
          </template>
          </Input>
          <Input ref="pass" placeholder='123456' :type='password' cssColorBorder='greenBorder' cssColor='greenColor'
            lable='Password'>
          <template #left>
            <lock-outlined />
          </template>
          <template #right>
            <span v-if="isShowPass" @click="ShowPass('password')"><eye-outlined /></span>
            <span v-if="!isShowPass" @click="ShowPass('text')"><eye-invisible-outlined /></span>
          </template>
          </Input>
        </div>
        <div class="infor-contain_login">
          <Button content="Đăng nhập" nodataCSS="btn_green" @click="submitLoginTuyendung" />
        </div>
        <div class="infor-contain_forget">
          <p>
            Bạn chưa có tài khoản? <router-link to="/signup-tuyendung"><B>Đăng ký ngay</B></router-link>
          </p>
          <p>
            <a href="#"><b>Quên mật khẩu</b></a>
          </p>
        </div>
        <div>
          <p><b>Bạn gặp khó khăn khi tạo tài khoản?</b></p>
          <p>Vui lòng gọi tới số (024) 6680 5588 (giờ hành chính).</p>
        </div>
      </div>
    </div>
    <div class="carouse">
      <Carousel />
    </div>
  </div>
</template>

<script>
import {
  MailOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons-vue';
import './login-tuyendung.scss';
import Carousel from "@/components/Carousel/carousel-tuyendung.vue";
import Button from '@/components/Button/Button.vue';
import Input from '../../components/input/Input.vue'
export default {
  data() {
    return {
      password: 'password',
      isShowPass: false,
      formLoginTuyendung:{
        email:'',
        pass:''
      }
    }
  },
  methods: {
    ShowPass(state) {
      this.isShowPass = !this.isShowPass
      this.password = state
    },
    submitLoginTuyendung(){
      console.log(this.$refs.email.value);
      console.log(this.$refs.pass.value);

    }

  },

  components: {
    LockOutlined,
    EyeOutlined,
    EyeInvisibleOutlined,
    MailOutlined,
    Carousel,
    Button,
    Input,
  },
};
</script>