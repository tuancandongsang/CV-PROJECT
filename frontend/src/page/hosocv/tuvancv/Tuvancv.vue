<template>
  <div id="tuvancv">
    <div class="header">
      <div class="background-img"></div>
      <div class="background-color"></div>
      <div class="main width">
        <div class="content">
          <p class="content-tittle">
            Dịch vụ <span>Tư vấn CV</span> <br />
            và <span>Định hướng tìm việc</span>
          </p>
          <p class="content-descreption">
            Giải pháp giúp bạn chinh phục cơ hội việc làm mơ ước và xây dựng lộ
            trình nghề nghiệp tương lai.
          </p>
          <p class="content-second">
            <span>> 6s</span> để chinh phục nhà tuyển dụng
          </p>
          <div class="content-button">
            <div class="content-button-child">
              <Button @click="register" content="Đăng ký ngay" btn_css="btn_green" />
              <Button @click="findOutMore" content="Tìm hiểu thêm" btn_css="button_second" />
            </div>
          </div>
        </div>
        <div class="img">
          <img src="	https://w.ladicdn.com/s750x850/5eccf0a3fe0845247513b20a/pgn-01-20210714022413.png" alt="" />
        </div>
      </div>
    </div>
    <div class="quote">
      <div class="background-img"></div>
      <div class="main width">
        <div class="main-title">THE RECRUITMENT FACTS</div>
        <div class="main-header">Những <span>con số</span> biết nói</div>
        <div class="main-quote">
          <div class="main-quote-item">
            <p class="second">6S</p>
            <p class="explain">
              là thời gian nhà tuyển dụng "Scan" CV và chỉ có 20% ứng viên được
              gọi phỏng vấn.
            </p>
          </div>
          <div class="main-quote-item">
            <p class="second">50%</p>
            <p class="explain">
              người tìm việc loay hoay với lộ trình thăng tiến của bản thân.
            </p>
          </div>
          <div class="main-quote-item">
            <p class="second">50%</p>
            <p class="explain">
              người tìm việc đánh mất cơ hội có được công việc mơ ước vì mắc lỗi
              viết CV
            </p>
          </div>
        </div>
        <div class="main-maxim">
          Bạn có thể thử, có thể sai, nhưng đừng mãi phí hoài thời gian, đánh
          mất cơ hội
        </div>
        <p class="main-invitation">Đi đúng hướng cùng TopCV ngay hôm nay!</p>
      </div>
    </div>
    <div class="adviss">
      <div class="main width">
        <div class="container-background-img1">
          <div class="background-img1"></div>
        </div>
        <div class="background-img2"></div>
        <p class="maxim">TOPCV'S SOLUTIONS</p>
        <p class="content">
          Dịch vụ <span>Tư vấn CV</span> và <br />
          <span> Định hướng tìm việc</span>
        </p>
        <ul class="desire">
          <li>
            <span><check-circle-outlined /></span>Sở hữu CV ghi điểm với nhà
            tuyển dụng trong 3s đầu tiên
          </li>
          <li>
            <span><check-circle-outlined /></span>CV lọt top 20% được gọi mời
            phỏng vấn, chinh phục công việc mơ ước
          </li>
          <li>
            <span>
              <CheckCircleOutlined />
            </span>Nhận bản CV hoàn chỉnh, chuyên
            nghiệp trong thời gian nhanh nhất
          </li>
        </ul>
        <div class="submit">
          <Button content="Khám phá ngay" btn_css="btn_green" />
        </div>
      </div>
    </div>
    <div class="solution">
      <p class="solution-quote">OPTIONS WE HAVE</p>
      <p class="foryou">
        Lựa chọn <span>giải pháp</span> phù hợp <span>dành cho bạn</span>
      </p>
      <div class="select width" v-for="item in optionRenderComponent" :key="item.key">
        <div class="navbar">
          <div class="content">
            <p class="title">{{ item.title }}</p>
            <p class="review">{{ item.review }}</p>
            <p class="price"><span>{{ item.priceOld }}</span> <b>{{ item.priceNew }}</b> {{ item.page }}</p>
          </div>
          <div class="submit">
            <Button content="Đăng lý ngay" btn_css="btn_green" @click="registeritem(`${item.key}`)" />
          </div>
        </div>
        <div class="main">
          <ul class="main-content">
            <li v-if="item.content1">
              <span>
                <CheckCircleOutlined />
              </span> {{ item.content1 }}
            </li>
            <li v-if="item.content2">
              <span>
                <CheckCircleOutlined />
              </span>{{ item.content2 }}
            </li>
            <li v-if="item.content3">
              <span>
                <CheckCircleOutlined />
              </span>{{ item.content3 }}
            </li>
            <li v-if="item.content4">
              <span>
                <CheckCircleOutlined />
              </span>{{ item.content4 }}
            </li>
          </ul>
          <div class="img">
            <img :src=item.src alt="" />
          </div>
        </div>
        <div class="final">
          <p>
            <span><double-right-outlined /></span>{{ item.finalContent }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./tuvancv.scss";
import {
  CheckCircleOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons-vue";
import Button from "@/components/Button/Button.vue";
export default {
  components: { Button, CheckCircleOutlined, DoubleRightOutlined },
  data() {
    return {
      optionRenderComponent: [
        {
          key: 1,
          title: "Tư vấn CV Tiếng Việt",
          review: "Review CV",
          priceOld: "150.000đ",
          priceNew: "75.000đ / 2 lần",
          page: '',
          content1: "Chuyên gia đánh giá, nhận xét và gợi ý giải pháp sửa đổi CV để ghi điểm với nhà tuyển dụng, tăng cơ hội mời phỏng vấn.",
          content2: "Chuyên gia đồng thời tư vấn thêm các nội dung: cách viết trong CV, phong cách thiết kế phù hợp với lĩnh vực bạn đang quan tâm, cách viết trong các trường hợp ít kinh nghiệm, chuyển ngành, gap-year, cách viết thích hợp với vị trí và ngành nghề của bạn,...",
          content3: "Bạn nhận được các link bài viết hướng dẫn chi tiết cách viết những phần cần sửa trong CV và bảng đánh giá chất lượng dịch vụ sau chương trình.",
          content4: "Sau khi nhận email góp ý lần đầu từ TopCV, bạn có thể phản hồi lại trong vòng 3 ngày.",
          src: "https://w.ladicdn.com/s750x750/5eccf0a3fe0845247513b20a/telecommuting-pana-20210914072356.png",
          finalContent: "Bạn nhận được 02 lần nhận xét qua email cùng chuyên gia TopCV",
        },
        {
          key: 2,
          title: "Tư vấn CV Tiếng Anh",
          review: "Review CV",
          priceOld: "300.000đ",
          priceNew: "150.000đ / 2 lần",
          page: '',
          content1: "Chuyên gia gợi ý cách viết trong các trường hợp ít kinh nghiệm, chuyển ngành, gap-year, cách viết thích hợp với vị trí và ngành nghề của bạn,...",
          content2: "Chuyên gia giải đáp các câu hỏi bạn đang băn khoăn về hồ sơ trong đơn đăng ký.",
          content3: "Chuyên gia nhận xét và gợi ý cách sửa thiết kế, câu từ tiếng Anh, chỉ lỗi ngữ pháp để ghi điểm với nhà tuyển dụng, tăng cơ hội mời phỏng vấn. ",
          content4: "Sau khi nhận email góp ý lần đầu từ TopCV, bạn có thể phản hồi lại trong vòng 3 ngày.",
          src: "https://w.ladicdn.com/s700x700/5eccf0a3fe0845247513b20a/online-review-pana-20211115024310.png",
          finalContent: "Bạn nhận được 02 lần nhận xét qua email cùng chuyên gia TopCV",
        },
        {
          key: 3,
          title: "Dịch CV Việt - Anh",
          review: "CV Translation: Vietnamese to English",
          priceOld: "300.000đ",
          priceNew: "150.000đ / trang ",
          page: "(400 từ)",
          content1: "Dựa trên bản CV Tiếng Việt từ bạn, chuyên gia sẽ dịch sang Tiếng Anh đúng chuẩn và chuyên nghiệp.",
          content2: "Phù hợp với các bạn muốn ứng tuyển công ty nước ngoài, công ty lớn, công ty yêu cầu tiếng Anh hay bất kỳ công ty nào để tạo ấn tượng với nhà tuyển dụng.",
          content3: "Các chuyên gia từ TopCV sẽ sử dụng các từ khóa tốt nhất, mạnh nhất, phù hợp nhất với vị trí và lĩnh vực, tăng khả năng trúng tuyển của bạn.",
          content4: "",
          src: "	https://w.ladicdn.com/s700x650/5eccf0a3fe0845247513b20a/dich-cv-20211220101307.png",
          finalContent: "Bạn nhận được 1 bản dịch hoàn chỉnh bằng file Word và gợi ý mẫu nên sử dụng từ TopCV.",
        },
        {
          key: 4,
          title: "Dịch và Tư Vấn CV Việt - Anh",
          review: "CV Translation and review: Vietnamese to English",
          priceOld: "450.000đ",
          priceNew: "200.000đ / trang",
          page: "(400 từ)",
          content1: "Dựa trên bản CV Tiếng Việt từ bạn, chuyên gia sẽ dịch và kết hợp tư vấn để giúp bản có bản CV Tiếng Anh hoàn hảo nhất.",
          content2: "Phù hợp với các bạn muốn ứng tuyển công ty nước ngoài, công ty lớn, công ty yêu cầu tiếng Anh hay bất kỳ công ty nào để tạo ấn tượng với nhà tuyển dụng.",
          content3: "",
          content4: "",
          src: "	https://w.ladicdn.com/s700x650/5eccf0a3fe0845247513b20a/dich-cv-20211220101307.png",
          finalContent: "Bạn nhận được 1 bản dịch hoàn chỉnh bằng file Word và gợi ý mẫu nên sử dụng từ TopCV.",
        },
        {
          key: 5,
          title: "Viết CV Nhanh Tiếng Việt",
          review: "CV Writing",
          priceOld: "1.300.000đ",
          priceNew: "650.000đ / CV ",
          page: '',
          content1: "Với thông tin bạn cung cấp, TopCV sẽ giúp bạn viết CV bằng tiếng Việt và thiết kế một bản CV hoàn chỉnh trong vòng 24 - 48 giờ.",
          content2: "Dành riêng cho những bạn cần CV hoàn chỉnh trong thời gian gấp để ứng tuyển, những bạn chưa có nhiều kinh nghiệm viết CV chuyên nghiệp.",
          content3: "Hoặc đơn giản là bạn muốn có một bản CV chuyên nghiệp và ấn tượng nhất để chắc chắn ứng tuyển thành công.",
          content4: "",
          src: "https://w.ladicdn.com/s650x650/5eccf0a3fe0845247513b20a/viet-cv-nhanh-topcv-20211220094418.png",
          finalContent: "Bạn sẽ nhận được bản CV Tiếng Việt hoàn chỉnh từ A - Z trong thời gian gấp theo yêu cầu.",
        },
        {
          key: 6,
          title: "Viết CV Nhanh Tiếng Anh",
          review: "CV Writing",
          priceOld: "1.700.000đ",
          priceNew: "850.000đ / CV ",
          page: '',
          content1: "Dựa trên thông tin cá nhân và JD bạn cung cấp (nếu có), TopCV sẽ giúp bạn viết CV bằng tiếng Anh và thiết kế hoàn chỉnh trong vòng 24 - 48 giờ.",
          content2: "Dành riêng cho những bạn cần CV Tiếng Anh hoàn chỉnh trong thời gian ngắn, những bạn muốn ứng tuyển công ty nước ngoài, công ty lớn.",
          content3: "CV Tiếng Anh giúp bạn tăng 80% cơ hội ứng tuyển và ghi điểm trong mắt nhà tuyển dụng.",
          content4: "",
          src: "	https://w.ladicdn.com/s700x600/5eccf0a3fe0845247513b20a/online-resume-pana-20211220095136.png",
          finalContent: "Bạn sẽ nhận được bản CV Tiếng Anh hoàn thiện và chuyên nghiệp trong thời gian ngắn nhất.",
        },
      ]
    }
  },
  methods: {
    register() {
      console.log("register");
    },
    findOutMore() {
      console.log("findOutMore");
    },
    registeritem(text) {
      console.log('text', text);
    }
  },
};
</script>
