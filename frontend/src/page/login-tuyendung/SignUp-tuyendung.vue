<template>
  <div>
    <Modal :visible="visible" :textOpenModal="textOpenModal" :btn_css="btn_css" ref="modal">

      <div class="modal-singup_tuyendung">
        <div class="modal-singup_tuyendung-header">
          <h2>Chào bạn,</h2>
          <p>
            Bạn hãy dành ra vài giây để xác nhận thông tin dưới đây nhé!
            <img src="../../assets/image/Bell-ring.webp" />
          </p>
        </div>
        <div class="modal-singup_tuyendung-select">
          <h3>
            Để tối ưu tốt nhất cho trải nghiệm của bạn với TopCV,
            <br />
            vui lòng lựa chọn nhóm phù hợp nhất với bạn.
          </h3>
          <div class="modal-singup_tuyendung-select-container">
            <div class="modal-singup_tuyendung-select-container-item">
              <img src="../../assets/image/img_login_signup_tuyendung/bussiness.dfe4b5e.svg" alt="" />
              <div class="modal-singup_tuyendung-select-container-item-button">
                <Button @click="checkSignup_tuyendung" content="Tôi là nhà tuyển dụng" btn_css="btn_green" />
              </div>
            </div>
            <div class="modal-singup_tuyendung-select-container-item">
              <img src="../../assets/image/img_login_signup_tuyendung/student.031bdde.svg" alt="" />
              <div class="modal-singup_tuyendung-select-container-item-button">
                <Button @click="checkSignup" content="Tôi là ứng viên tìm việc" btn_css="btn_green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
    <div class="signup_tuyendung">
      <div class="signup_tuyendung-img">
        <div class="signup_tuyendung-header">
          <div class="signup_tuyendung-header-navbar">
            <div>
              <span @click="handleBack">
                <ArrowLeftOutlined /> Quay lại
              </span>
            </div>
            <div>
              <img src="../../assets/image/logo-tuyendung/logo-tuyendung.webp" alt="" />
            </div>
          </div>
          <div class="signup_tuyendung-header-body">
            <h1>Đăng ký tài khoản Nhà tuyển dụng</h1>
            <p>
              Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm
              <br />
              công nghệ tuyển dụng ứng dụng sâu AI & Hiring Funnel
            </p>
          </div>
          <h3 class="go_loginTuyendung" @click="() => this.$router.push('/login-tuyendung')">Bạn đã có tài khoản nhà tuyển
            dụng</h3>
        </div>
      </div>
      <div class="signup_tuyendung-body">
        <div class="signup_tuyendung-body_header">
          <div>Quy định</div>
          <div v-if="isShowInfor" v-on:click="showInfor">
            <CaretUpOutlined />
          </div>
          <div v-if="!isShowInfor" v-on:click="showInfor">
            <CaretDownOutlined />
          </div>
        </div>
        <div v-if="isShowInfor" class="signup_tuyendung-body_header-tittle">
          Để đảm bảo chất lượng dịch vụ, TopCV
          <b>không cho phép một người dùng tạo nhiều tài khoản khác nhau.</b>
          <br />
          Nếu phát hiện vi phạm, TopCV sẽ ngừng cung cấp dịch vụ tới tất cả các
          tài khoản trùng lặp hoặc chặn toàn bộ truy cập tới hệ thống website
          của TopCV.
          <br />
          Đối với trường hợp khách hàng đã sử dụng hết 3 tin tuyển dụng miễn
          phí, TopCV hỗ trợ kích hoạt đăng tin tuyển dụng không giới hạn sau khi
          quý doanh nghiệp cung cấp thông tin giấy phép kinh doanh.
          <br />
          <br />
          Mọi thắc mắc vui lòng liên hệ Hotline CSKH:
          <p>
            <span>
              <PhoneOutlined class="phone" />
            </span> &nbsp; (024) 71079799
          </p>
          <p>Đã có tài khoản? &nbsp; <b>Đăng nhập ngay</b></p>
        </div>
        <div class="signup_tuyendung-body-form">
            <h1 class="title-acc">TÀI KHOẢN</h1>
            <div class="signup_tuyendung-body-form_item">
              <p>Email đăng nhập:</p>
              <div class="signup_tuyendung-body-form_item-input">
                <Input placeholder='tuancandongsang@gmail.com' type='text' cssColorBorder='greenBorder'
                  cssColor='greenColor' lable=''>
                <template #left>
                  <mail-outlined />
                </template>
                <template #right>
                </template>
                </Input>
                <p>
                  *TopCV khuyến nghị đăng ký bằng email công ty (theo tên miền
                  website công ty) để được hỗ trợ duyệt tin nhanh & đăng tin
                  không giới hạn.
                </p>
              </div>
            </div>
            <div class="signup_tuyendung-body-form_item">
              <p>Mật khẩu:</p>
              <div class="signup_tuyendung-body-form_item-input">
                <Input ref="pass" placeholder='Password' :type='password' cssColorBorder='greenBorder'
                  cssColor='greenColor'>
                <template #left>
                  <lock-outlined />
                </template>
                <template #right>
                  <span v-if="isShowPass" @click="ShowPass('password')"><eye-outlined /></span>
                  <span v-if="!isShowPass" @click="ShowPass('text')"><eye-invisible-outlined /></span>
                </template>
                </Input>
              </div>
            </div>
            <div class="signup_tuyendung-body-form_item">
              <p>Nhập lại mật khẩu:</p>
              <div class="signup_tuyendung-body-form_item-input">
                <Input ref="repass" placeholder='retype password' :type='password' cssColorBorder='greenBorder'
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
            </div>

            <h2 class="title-acc">THÔNG TIN NHÀ TUYỂN DỤNG</h2>
            <div class="signup_tuyendung-body-form_item">
              <p>Họ và tên:</p>
              <div class="signup_tuyendung-body-form_item-input">
                <Input placeholder='Pham The Anh' type='' cssColorBorder='greenBorder' cssColor='greenColor'>
                <template #left>
                  <user-add-outlined />
                </template>
                <template #right>

                </template>
                </Input>
              </div>
            </div>
            <div class="signup_tuyendung-body-form_item">
              <p>Số điện thoại cá nhân:</p>
              <div class="signup_tuyendung-body-form_item-input">
                <Input placeholder='xxxx' type='number' cssColorBorder='greenBorder' cssColor='greenColor' >
                <template #left>
                  <phone-outlined />
                </template>
                <template #right>

                </template>
                </Input>
              </div>
            </div>
            <div class="signup_tuyendung-body-form_item">
              <p>Giới tính:</p>
              <div class="signup_tuyendung-body-form_item-input">
                <a-form-item label=""  >
                  <a-select v-model:value="formState.gender" placeholder="-Chọn giới tính-">
                    <a-select-option value="male">Male</a-select-option>
                    <a-select-option value="woman">Woman</a-select-option>
                  </a-select>
                </a-form-item>
              </div>
            </div>
            <div class="signup_tuyendung-body-form_item">
              <p>Công ty:</p>
              <div class="signup_tuyendung-body-form_item-input">
                <Input placeholder='CMC' type='' cssColorBorder='greenBorder' cssColor='greenColor'>
                <template #left>
                  <shop-outlined />
                </template>
                <template #right>

                </template>
                </Input>
              </div>
            </div>
            <div class="signup_tuyendung-body-form_item">
              <p>Vị trí công tác::</p>
              <div class="signup_tuyendung-body-form_item-input">
                <a-form-item label="" >
                  <a-select v-model:value="formState.workplace" placeholder="-Chọn vị trí công tác-">
                    <a-select-option value="nhân viên">nhân viên</a-select-option>
                    <a-select-option value="Giám Đốc">Giám Đốc</a-select-option>
                    <a-select-option value="Tuyển dụng">Tuyển dụng</a-select-option>
                    <a-select-option value="Nhân sự">Nhân sự</a-select-option>
                  </a-select>
                </a-form-item>
              </div>
            </div>
            <div class="signup_tuyendung-body-form_item">
              <p>Địa điểm làm việc:</p>
              <div class="signup_tuyendung-body-form_item-input">
                <SelectLocationVue ref="location" />
              </div>
            </div>
            <div class="signup_tuyendung-body-form_item">
              <p>Skype:</p>
              <div class="signup_tuyendung-body-form_item-input">
                <Input placeholder='alo@skype' type='' cssColorBorder='greenBorder' cssColor='greenColor'>
                <template #left>
                  <skype-outlined />
                </template>
                <template #right>
                </template>
                </Input>
              </div>
            </div>
            <div class="signup_tuyendung-body-form_item">
              <p></p>
              <div class="signup_tuyendung-body-form_item-input">
                <a-form-item label="" required>
                  <a-radio-group v-model:value="formState.check">
                    <a-radio value="1">Tôi đồng ý với
                      <a href="#"> <b>Điều khoản dịch vụ</b></a> của
                      TopCV.</a-radio>
                  </a-radio-group>
                </a-form-item>
              </div>
            </div>
            <div class="signup_tuyendung-body-form_submit">
              <a-form-item>
                <a-button type="primary" @click="onSubmit">Hoàn tất</a-button>
                <a-button style="margin-left: 10px" @click="cancel">Hủy</a-button>
              </a-form-item>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  LockOutlined,
  UserAddOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  MailOutlined,
  ArrowLeftOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  PhoneOutlined,
  ShopOutlined,
  SkypeOutlined
} from '@ant-design/icons-vue';
import './signUp-tuyendung.scss';
import Modal from '@/components/Modal/Modal.vue';
import Button from '@/components/Button/Button.vue';
import SelectLocationVue from '@/components/SelectLocation/SelectLocation.vue';
import Input from '../../components/input/Input.vue';
export default {
  components: {
    SkypeOutlined,
    ShopOutlined,
    UserAddOutlined,
    LockOutlined,
    EyeOutlined,
    EyeInvisibleOutlined,
    MailOutlined,
    Input,
    Modal,
    Button,
    ArrowLeftOutlined,
    CaretDownOutlined,
    CaretUpOutlined,
    PhoneOutlined,
    SelectLocationVue,
  },
  data() {
    return {
      isShowPass: false,
      password: 'password',
      isShowInfor: true,
      visible: true,
      textOpenModal: '',
      btn_css: 'button_none',
      formRef: '',
      formState: {
        email: undefined,
        name: undefined,
        pass: undefined,
        repass: undefined,
        phone: undefined,
        gender: undefined,
        check: false,
        workplace: undefined,
        location: undefined,
        skype: undefined,
      },
    };
  },
  methods: {
    ShowPass(state) {
      this.isShowPass = !this.isShowPass
      this.password = state
    },
    handleBack() {
      this.$router.go(-1);
    },
    showInfor() {
      this.isShowInfor = !this.isShowInfor;
    },
    checkSignup() {
      this.$router.push('/sign-up');
    },
    checkSignup_tuyendung() {
      this.visible = false;
      // console.log(this.$refs.modal.handleOk());
      // this.$router.push('/login-tuyendung');
      this.$refs.modal.handleOk();
    },
    async onSubmit() {
      this.formState.location = { ...this.$refs.location.location };
      console.log('cuoi cung', this.formState);
    },
    cancel() {
      this.$router.push('/login-tuyendung');
    },
  },
};
</script>
<style >
.ant-row {
  margin: 0;
}

.ant-col-14 {
  max-width: 100%;
}

.ant-input-number {
  width: 100%;
}
</style>