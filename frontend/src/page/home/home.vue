<template>
  <div id="home">
    <Drawer />
    <div class="header">
      <div class="background-img"></div>
      <div class="container width">
        <h1 class="tittle">Tìm công việc của bạn</h1>
        <p class="descreption">
          Cách dễ nhất để tìm một công việc mơ ước trong vài phút
        </p>
        <div class="select-box">
          <div class="input">
            <Input
              placeholder="Từ khoá, chức danh"
              type=""
              cssColorBorder="greenBorder"
              cssColor="greenColor"
              :disabled="false"
            >
              <template #left> <search-outlined /></template>
              <template #right> </template>
            </Input>
          </div>
          <div class="select">
            <SelectLocation placeholder="placeholder" :options="options" />
          </div>
          <div class="button">
            <ButtonVue content="Tìm việc làm" btn_css="btn_green" />
          </div>
        </div>
        <div class="keywoord">
          <p class="key">
            <b>Từ khóa phổ biến :</b>
            <span> Kế Toán </span>
            <span>Nhân Viên Kinh Doanh </span>
            <span>Biên Tập Viên </span>
            <span>Lập Trình Viên </span>
            <span>Kỹ Sư Xây Dựng </span>
          </p>
        </div>
      </div>
    </div>
    <div class="create-cv">
      <div class="background-img"></div>
      <div class="width container">
        <div class="language">
          <p><b>Please select your language:</b></p>
          <div class="language-flas">
            <div class="language-flas-country">
              <img
                src="https://www.topcv.vn/v4/image/flag/vn.png"
                alt="vn"
              />Việt Nam
            </div>
            <div class="language-flas-country">
              <img src="https://www.topcv.vn/v4/image/flag/us.png" alt="us" />
              English
            </div>
            <div class="language-flas-country">
              <img src="https://www.topcv.vn/v4/image/flag/jp.png" alt="jp" />
              USA
            </div>
          </div>
        </div>
        <div class="button-create">
          <ButtonVue
            content="TẠO CV MIỄN PHÍ NGAY BÂY GIỜ"
            btn_css="btn_green"
          />
        </div>
        <div class="connect-social">
          <img
            src="https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/androidbadgesbox2.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="create-cv-upload">
      <div class="container width">
        <div class="create-cv">
          <h2 class="tittle">Tạo CV online ấn tượng</h2>
          <p class="description">
            TopCV hiện có 50+ mẫu CV chuyên nghiệp, độc đáo phù hợp với mọi
            ngành nghề
          </p>
          <div class="button">
            <ButtonVue content="Tạo CV ngay" btn_css="btn_green" />
          </div>
          <img
            src="https://www.topcv.vn/v4/image/welcome/mau_cv.png?v=1.0.0"
            alt=""
          />
        </div>
        <div class="create-cv">
          <h2 class="tittle">Tạo CV online ấn tượng</h2>
          <p class="description">
            TopCV hiện có 50+ mẫu CV chuyên nghiệp, độc đáo phù hợp với mọi
            ngành nghề
          </p>
          <div class="button">
            <ButtonVue content="Upload CV ngay" btn_css="btn_green" />
          </div>
          <img
            src="https://www.topcv.vn/v4/image/welcome/upload-cv.png?v=1.0.0"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="hope">
      <div class="container width">
        <div class="left">
          <h1 class="tittle">Cơ hội vàng nằm gọn trong tay bạn</h1>
          <p class="step">
            <b><PlusCircleOutlined /></b> Tạo CV, Profile ngay trên điện thoại
          </p>
          <p class="step">
            <b><PlusCircleOutlined /></b> Tìm kiếm và ứng tuyển công việc nhanh
            gọn, dễ dàng, mọi lúc mọi nơi
          </p>
          <p class="step">
            <b><PlusCircleOutlined /></b> Liên lạc với nhà tuyển dụng qua TopCV
            Connect
          </p>
          <p class="download"><b>Tải ứng dụng tìm việc ngay</b></p>
          <div class="box-img">
            <img
              src="https://www.topcv.vn/v4/image/welcome/download/chplay.png?v=1.0.0"
              alt=""
            />
            <img
              src="	https://www.topcv.vn/v4/image/welcome/download/app_store.png?v=1.0.0"
              alt=""
            />
          </div>
        </div>
        <div class="right">
          <img
            src="	https://www.topcv.vn/v4/image/welcome/app-download.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="for-me">
      <div class="container width">
        <h2 class="tittle">Về chúng tôi</h2>
        <p class="description">
          TopCV là công ty công nghệ nhân sự (HR Tech) hàng đầu Việt Nam. Với
          năng lực lõi là công nghệ, đặc biệt là trí tuệ nhân tạo (AI), sứ mệnh
          của TopCV đặt ra cho mình là thay đổi thị trường tuyển dụng - nhân sự
          ngày một hiệu quả hơn. Bằng công nghệ, chúng tôi tạo ra nền tảng cho
          phép người lao động tạo CV, phát triển được các kỹ năng cá nhân, xây
          dựng hình ảnh chuyên nghiệp trong mắt nhà tuyển dụng và tiếp cận với
          các cơ hội việc làm phù hợp.
        </p>
        <div class="box-number">
          <div class="item">
            <h2>30.000+</h2>
            <p>Ứng viên đang bật tìm việc trung bình/thời điểm</p>
          </div>
          <div class="item">
            <h2>30.000+</h2>
            <p>Ứng viên đang bật tìm việc trung bình/thời điểm</p>
          </div>
          <div class="item">
            <h2>30.000+</h2>
            <p>Ứng viên đang bật tìm việc trung bình/thời điểm</p>
          </div>
          <div class="item">
            <h2>30.000+</h2>
            <p>Ứng viên đang bật tìm việc trung bình/thời điểm</p>
          </div>
          <div class="item">
            <h2>30.000+</h2>
            <p>Ứng viên đang bật tìm việc trung bình/thời điểm</p>
          </div>
          <div class="item">
            <h2>30.000+</h2>
            <p>Ứng viên đang bật tìm việc trung bình/thời điểm</p>
          </div>
          <div class="item">
            <h2>30.000+</h2>
            <p>Ứng viên đang bật tìm việc trung bình/thời điểm</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons-vue";
import "./Home.scss";
import Drawer from "@/components/Drawer/Drawer.vue";
import ButtonVue from "@/components/Button/Button.vue";
import SelectLocation from "@/components/SelectLocation/SelectLocation.vue";
import Input from "@/components/input/Input.vue";
export default {
  components: {
    PlusCircleOutlined,
    Drawer,
    ButtonVue,
    SelectLocation,
    Input,
    SearchOutlined,
  },
  data() {
    return {
      options: [
        {
          value: "jack",
          label: "Jack",
        },
      ],
    };
  },
};
</script>
