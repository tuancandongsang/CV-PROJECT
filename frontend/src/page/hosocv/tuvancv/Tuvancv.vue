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
              <Button
                @click="register"
                content="Đăng ký ngay"
                btn_css="btn_green"
              />
              <Button
                @click="findOutMore"
                content="Tìm hiểu thêm"
                btn_css="button_second"
              />
            </div>
          </div>
        </div>
        <div class="img">
          <img
            src="	https://w.ladicdn.com/s750x850/5eccf0a3fe0845247513b20a/pgn-01-20210714022413.png"
            alt=""
          />
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
            <span><CheckCircleOutlined /></span>Nhận bản CV hoàn chỉnh, chuyên
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
      <div class="select width">
        <div class="navbar">
          <div class="content">
            <p class="title">Tư vấn CV Tiếng Việt</p>
            <p class="review">Review CV</p>
            <p class="price"><span>150.000đ</span> <b>75.000đ / 2 lần</b></p>
          </div>
          <div class="submit">
            <Button content="Đăng lý ngay" btn_css="btn_green" />
          </div>
        </div>
        <div class="main">
          <ul class="main-content">
            <li>
              <span><CheckCircleOutlined /></span> Chuyên gia đánh giá, nhận xét
              và gợi ý giải pháp sửa đổi CV để ghi điểm với nhà tuyển dụng, tăng
              cơ hội mời phỏng vấn.
            </li>
            <li>
              <span><CheckCircleOutlined /></span>Chuyên gia đồng thời tư vấn
              thêm các nội dung: cách viết trong CV, phong cách thiết kế phù hợp
              với lĩnh vực bạn đang quan tâm, cách viết trong các trường hợp ít
              kinh nghiệm, chuyển ngành, gap-year, cách viết thích hợp với vị
              trí và ngành nghề của bạn,...
            </li>
            <li>
              <span><CheckCircleOutlined /></span>
              Bạn nhận được các link bài viết hướng dẫn chi tiết cách viết những
              phần cần sửa trong CV và bảng đánh giá chất lượng dịch vụ sau
              chương trình.
            </li>
            <li>
              <span><CheckCircleOutlined /></span>
              Sau khi nhận email góp ý lần đầu từ TopCV, bạn có thể phản hồi lại
              trong vòng 3 ngày.
            </li>
          </ul>
          <div class="img">
            <img
              src="https://w.ladicdn.com/s750x750/5eccf0a3fe0845247513b20a/telecommuting-pana-20210914072356.png"
              alt=""
            />
          </div>
        </div>
        <div class="final">
          <p>
            <span><double-right-outlined /></span>Bạn nhận được 02 lần nhận xét
            qua email cùng chuyên gia TopCV
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
  methods: {
    register() {
      console.log("register");
    },
    findOutMore() {
      console.log("findOutMore");
    },
  },
};
</script>
