<template>
  <div id="footer">
    <div class="container">
      <div class="main">
        <div class="logo">
          <img
            src="https://w.ladicdn.com/s450x400/5eccf0a3fe0845247513b20a/logo-topcv-no-slogan_w-20210720060357.png"
            alt=""
          />
        </div>
        <h2 class="tittle">Công ty Cổ phần TOPCV Việt Nam</h2>
        <div class="infor">
          <div><HomeOutlined /></div>
          <div>
            <p>
              Trụ sở HN: Tầng 3 - 4, Tòa nhà Gold Season, 47 Nguyễn Tuân, P.
              Thanh Xuân Trung, Q. Thanh Xuân, Hà Nội
            </p>
            <p>
              TP HCM: Tầng 12 Dali Tower, 24C Phan Đăng Lưu, Phường 6, Q. Bình
              Thạnh, TP. Hồ Chí Minh
            </p>
          </div>
        </div>
        <div class="infor">
          <p><MailOutlined /></p>
          <p>Email: cskh@topcv.vn</p>
        </div>
        <div class="infor">
          <p><PhoneOutlined /></p>
          <p>Điện thoại: (024) 710 79 799</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons-vue";
import "./footer.scss";
export default {
  components: { HomeOutlined, MailOutlined, PhoneOutlined },
};
</script>

<style></style>
