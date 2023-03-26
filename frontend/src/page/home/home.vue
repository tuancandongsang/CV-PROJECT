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
    <div class="feature">
      <div class="container width">
        <h1 class="tittle">Phát triển bản thân và sự nghiệp</h1>
        <div class="feature-item">
          <div class="item" v-for="item in feature" :key="item.tittle">
            <div class="item-img">
              <img :src="item.urlIcon" alt="" />
            </div>
            <div class="infor">
              <h3 class="tittle">{{ item.tittle }}</h3>
              <p class="description">
                {{ item.description }}
              </p>
              <div class="button">
                <div
                  v-if="item.button1"
                  @click="this.$router.push(`${item.linkButton1}`)"
                >
                  <ButtonVue :content="item.button1" btn_css="button_second" />
                </div>
                <div
                  v-if="item.button2"
                  @click="this.$router.push(`${item.linkButton2}`)"
                >
                  <ButtonVue :content="item.button2" btn_css="button_second" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="container width">
        <h3 class="tittle">Báo chí nói về TopCV</h3>
        <div class="news-list">
          <img v-for="item in newsListLogo" :key="item" :src="item" alt="" />
        </div>
        <h3 class="tittle">Giải thưởng, thành tựu</h3>
        <div class="awards-list">
          <div
            class="awards-list-item"
            v-for="item in newItemAwards"
            :key="item.img"
          >
            <img :src="item.img" alt="" />
            <p class="key"><RightCircleOutlined /> {{ item.key }}</p>
            <p class="description">{{ item.description }}</p>
            <div class="more" @click="this.$router.push(`${item.link}`)">
              Đọc thêm <DoubleRightOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SearchOutlined,
  PlusCircleOutlined,
  DoubleRightOutlined,
  RightCircleOutlined,
} from "@ant-design/icons-vue";
import "./Home.scss";
import Drawer from "@/components/Drawer/Drawer.vue";
import ButtonVue from "@/components/Button/Button.vue";
import SelectLocation from "@/components/SelectLocation/SelectLocation.vue";
import Input from "@/components/input/Input.vue";
export default {
  components: {
    RightCircleOutlined,
    DoubleRightOutlined,
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
      feature: [
        {
          urlIcon: "https://www.topcv.vn/v4/image/welcome/ic1.svg",
          tittle: "Khám phá tính cách và năng lực bản thân",
          description:
            "Lựa chọn nghề nghiệp chính xác hơn thông qua các bài trắc nghiệm về tính cách, khả năng giải quyết vấn đề, trí thông minh,...",
          button1: "Trắc nghiệm MBTI",
          button2: "Trắc nghiệm MI",
          linkButton1: `/login`,
          linkButton2: `/login`,
        },
        {
          urlIcon: "	https://www.topcv.vn/v4/image/welcome/ic2.svg",
          tittle: "Tra cứu thông tin sự nghiệp",
          description:
            "Dễ dàng tiếp cận và tìm hiểu về các chế độ, chính sách nhân sự cần biết thông qua các công cụ hữu ích",
          button1: "Công cụ tính lương Gross-Net",
          button2: "Công cụ tính BHTN",
          linkButton1: `/tienich/gross-to-net`,
          linkButton2: `/tienich/bao-hiem-that-nghiep`,
        },
        {
          urlIcon: "https://www.topcv.vn/v4/image/welcome/ic3.svg",
          tittle: "Quỹ ý tưởng phát triển nghề nghiệp TopCareer",
          description:
            "Giúp học sinh, sinh viên hiểu về tầm quan trọng của giáo dục hướng nghiệp, nhận diện nghề và nâng cao năng lực ứng tuyển",
          button1: "Tìm hiểu thêm",
          button2: undefined,
          linkButton1: `/login`,
          linkButton2: `/login`,
        },
        {
          urlIcon: "https://www.topcv.vn/v4/image/welcome/ic4.svg",
          tittle: "TopCV Contest - Cổng học tập và đánh giá năng lực",
          description:
            "Cung cấp các khóa học, các kỳ thi giúp ứng viên hiểu rõ về xu hướng việc làm và những tiêu chuẩn mới về Năng lực chuyên môn",
          button1: "Tìm hiểu thêm",
          button2: undefined,
          linkButton1: `/login`,
          linkButton2: `/login`,
        },
        {
          urlIcon: "https://www.topcv.vn/v4/image/welcome/ic5.svg",
          tittle: "Chương trình bệ phóng sự nghiệp 4.0",
          description:
            "Cung cấp cho sinh viên thông tin về thị trường tuyển dụng và đào tạo kỹ năng ứng tuyển, kết nối Nhà trường và Doanh nghiệp",
          button1: "Tìm hiểu thêm",
          button2: undefined,
          linkButton1: `/login`,
          linkButton2: `/login`,
        },
      ],
      newsListLogo: [
        "	https://www.topcv.vn/v4/image/welcome/logo_bao_chi_01.png",
        "https://www.topcv.vn/v4/image/welcome/logo_bao_chi_02.png",
        "https://www.topcv.vn/v4/image/welcome/logo_bao_chi_03.png",
        "https://www.topcv.vn/v4/image/welcome/logo_bao_chi_04.png",
        "https://www.topcv.vn/v4/image/welcome/logo_bao_chi_05.png",
        "https://www.topcv.vn/v4/image/welcome/logo_bao_chi_06.png",
      ],
      newItemAwards: [
        {
          img: "https://www.topcv.vn/v4/image/welcome/award/award_01.png",
          key: " Startup",
          description:
            "Top 15 Startups xuất sắc của chương trình “Bình chọn Startup Việt 2018”",
          link: "",
        },
        {
          img: "https://www.topcv.vn/v4/image/welcome/award/award_02.png",
          key: " Startup",
          description:
            "Top 15 Startups được Google lựa chọn tham gia Google for Startups Accelerator: Southeast Asia",
          link: "",
        },
        {
          img: "https://www.topcv.vn/v4/image/welcome/award/award_03.png",
          key: " Technology",
          description:
            "Nhận giải thưởng Sao Khuê 2020 về lĩnh vực Nền tảng và công cụ tuyển dụng",
          link: "",
        },
        {
          img: "https://www.topcv.vn/v4/image/welcome/award/award_04.png",
          key: " AI",
          description:
            "Nhận giải thưởng Sao Khuê 2021 với giải pháp ứng dụng AI vào tuyển dụng CV Scout TopMatch.AI",
          link: "",
        },
      ],
    };
  },
};
</script>
