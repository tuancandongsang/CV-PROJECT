<template>
  <div id="maucv">
    <div class="maucv width">
      <h3 class="tittle">
        Danh sách mẫu CV xin việc tiếng
        <img src="https://www.topcv.vn/v4/image/flag/us.png" alt="us" /> Anh /
        <img src="https://www.topcv.vn/v4/image/flag/vn.png" alt="vn" /> Việt /
        <img src="https://www.topcv.vn/v4/image/flag/jp.png" alt="jp" /> Nhật
        chuẩn 2023
      </h3>
      <p>
        Các mẫu CV được thiết kế theo chuẩn, theo các ngành nghề. Phù hợp với
        sinh viên và người đi làm
      </p>
      <div class="selectTypeCv">
        <div class="selectTypeCv-item language">
          <SelectOptionBase placeholder="Chọn ngôn nghữ" :options="language" />
        </div>
        <div class="selectTypeCv-item typecv">
          <SelectOptionBase placeholder="Chọn ngành nghề" :options="typecv" />
        </div>
        <div class="selectTypeCv-item degisn">
          <SelectOptionBase placeholder="Chọn mẫu thiết kế" :options="degisn" />
        </div>
        <div class="selectTypeCv-item">
          <input
            type="radio"
            id="new"
            name="styleCv"
            value="new"
            v-model="styleCv"
          />
          <label for="new">Mới cập nhật</label><br />
        </div>
        <div class="selectTypeCv-item">
          <input
            type="radio"
            id="hot"
            name="styleCv"
            value="hot"
            v-model="styleCv"
          />
          <label for="hot">Được dùng nhiều nhất</label><br />
        </div>
      </div>
      <div class="select-builder">
        <div
          class="select-builder-item"
          :class="styleBuilder === 'builder2' ? 'selected' : ''"
          @click="builder('builder2')"
        >
          CV Builder 2.0
        </div>
        <div
          class="select-builder-item"
          :class="styleBuilder === 'builder1' ? 'selected' : ''"
          @click="builder('builder1')"
        >
          CV Builder 1.0
        </div>
      </div>
      <div class="builder-container">
        <p v-if="styleBuilder === 'builder2'" class="builder-container-title">
          Trải nghiệm phiên bản công cụ tạo CV cá nhân hoá mới nhất của TopCV -
          <b>CV Builder 2.0</b> với các mẫu CV mới nhất dưới đây.
        </p>
        <p v-if="styleBuilder === 'builder1'" class="builder-container-title">
          Tiếp tục trải nghiệm giao diện và các tính năng quen thuộc của phiên
          bản <b>CV Builder 1.0</b> - Công cụ tạo CV online số 1 Việt Nam với
          các mẫu CV dưới đây:
        </p>
        <div class="container-maucv">
          <div class="item">
            <div class="item-img">
              <img
                src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/prosper.png?v=1.0.6"
                alt="Thành đạt"
              />
            </div>
            <div class="item-main">
              <div class="item-powered">
                <span><thunderbolt-outlined /></span> Powered by CV Builder 2.0
              </div>
              <div class="item-header">Thành đạt</div>
              <ul class="item-color">
                <li class="item-color-list green"></li>
                <li class="item-color-list blue"></li>
                <li class="item-color-list error"></li>
              </ul>
            </div>
          </div>
          <div class="item">
            <div class="item-img">
              <img
                src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/prosper.png?v=1.0.6"
                alt="Thành đạt"
              />
            </div>
            <div class="item-main">
              <div class="item-powered">
                <span><thunderbolt-outlined /></span> Powered by CV Builder 2.0
              </div>
              <div class="item-header">Thành đạt</div>
              <ul class="item-color">
                <li class="item-color-list green"></li>
                <li class="item-color-list blue"></li>
                <li class="item-color-list error"></li>
              </ul>
            </div>
          </div>
          <div class="item">
            <div class="item-img">
              <img
                src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/prosper.png?v=1.0.6"
                alt="Thành đạt"
              />
            </div>
            <div class="item-main">
              <div class="item-powered">
                <span><thunderbolt-outlined /></span> Powered by CV Builder 2.0
              </div>
              <div class="item-header">Thành đạt</div>
              <ul class="item-color">
                <li class="item-color-list green"></li>
                <li class="item-color-list blue"></li>
                <li class="item-color-list error"></li>
              </ul>
            </div>
          </div>
          <div class="item">
            <div class="item-img">
              <img
                src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/prosper.png?v=1.0.6"
                alt="Thành đạt"
              />
            </div>
            <div class="item-main">
              <div class="item-powered">
                <span><thunderbolt-outlined /></span> Powered by CV Builder 2.0
              </div>
              <div class="item-header">Thành đạt</div>
              <ul class="item-color">
                <li class="item-color-list green"></li>
                <li class="item-color-list blue"></li>
                <li class="item-color-list error"></li>
              </ul>
            </div>
          </div>
          <div class="item">
            <div class="item-img">
              <img
                src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/prosper.png?v=1.0.6"
                alt="Thành đạt"
              />
            </div>
            <div class="item-main">
              <div class="item-powered">
                <span><thunderbolt-outlined /></span> Powered by CV Builder 2.0
              </div>
              <div class="item-header">Thành đạt</div>
              <ul class="item-color">
                <li class="item-color-list green"></li>
                <li class="item-color-list blue"></li>
                <li class="item-color-list error"></li>
              </ul>
            </div>
          </div>
          <div class="item">
            <div class="item-img">
              <img
                src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/prosper.png?v=1.0.6"
                alt="Thành đạt"
              />
            </div>
            <div class="item-main">
              <div class="item-powered">
                <span><thunderbolt-outlined /></span> Powered by CV Builder 2.0
              </div>
              <div class="item-header">Thành đạt</div>
              <ul class="item-color">
                <li class="item-color-list green"></li>
                <li class="item-color-list blue"></li>
                <li class="item-color-list error"></li>
              </ul>
            </div>
          </div>
          <div class="item">
            <div class="item-img">
              <img
                src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/prosper.png?v=1.0.6"
                alt="Thành đạt"
              />
            </div>
            <div class="item-main">
              <div class="item-powered">
                <span><thunderbolt-outlined /></span> Powered by CV Builder 2.0
              </div>
              <div class="item-header">Thành đạt</div>
              <ul class="item-color">
                <li class="item-color-list green"></li>
                <li class="item-color-list blue"></li>
                <li class="item-color-list error"></li>
              </ul>
            </div>
          </div>
          <div class="item">
            <div class="item-img">
              <img
                src="https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/prosper.png?v=1.0.6"
                alt="Thành đạt"
              />
            </div>
            <div class="item-main">
              <div class="item-powered">
                <span><thunderbolt-outlined /></span> Powered by CV Builder 2.0
              </div>
              <div class="item-header">Thành đạt</div>
              <ul class="item-color">
                <li class="item-color-list green"></li>
                <li class="item-color-list blue"></li>
                <li class="item-color-list error"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="baner">
        <img src="https://www.topcv.vn/v4/image/cv_builder/banner.png" alt="" />
      </div>
    </div>
    <div class="background-bottom">
      <div class="instruct width">
        <div class="createcv">
          <h3>
            Tạo CV online miễn phí với các mẫu CV được thiết kế sẵn chỉ với 3
            bước:
          </h3>
          <ul>
            <li>
              Bước 1: Chọn ngôn ngữ khác / thay đổi tiêu chí gợi ý mẫu CV để
              TopCV gợi ý các mẫu CV phù hợp với nhu cầu của bạn.
            </li>
            <li>
              Bước 2: Chọn mẫu CV miễn phí mà bạn ưng ý nhất và tiến hành viết
              CV.
            </li>
            <li>
              Bước 3: Sau khi hoàn thiện viết CV, bạn tiến hành lưu CV lại tải
              CV về dưới dạng PDF hoặc sử dụng link CV online để gửi cho nhà
              tuyển dụng.
            </li>
          </ul>
        </div>
        <div class="createcv">
          <h3>Tại sao nên tạo CV online trên TopCV</h3>
          <ul>
            <li>
              Nhiều mẫu CV đẹp, miễn phí, phù hợp nhu cầu ứng tuyển các vị trí
              khác nhau.
            </li>
            <li>
              Tương tác trực quan, dễ dàng chỉnh sửa thông tin, tạo CV online
              nhanh chóng trong vòng 5 phút.
            </li>
            <li>
              Nhận gợi ý cách viết CV phù hợp cùng các mẫu CV tham khảo chi tiết
              theo ngành nghề.
            </li>
            <li>Mẫu CV đồng bộ với các mẫu thư xin việc (Cover Letter).</li>
            <li>Các mẫu CV hỗ trợ đa ngôn ngữ: tiếng Anh / Nhật / Việt.</li>
          </ul>
        </div>
        <div class="menu">
          <h2>Mục lục:</h2>
        </div>
        <p class="little">
          <i>
            Chúng ta đều biết rằng CV là một phần không thể thiếu trong quá
            trình xin việc của ứng viên. Vậy chính xác CV là gì? CV gồm những
            phần nào? Đâu là cách viết CV xin việc chuẩn nhất? Trong bài viết
            dưới đây TopCV sẽ đem tới những thông tin hữu ích về CV xin việc
            cũng như những lưu ý cần nắm rõ khi viết CV xin việc.</i
          >
        </p>
        <div class="more">
          <div><Button content="Xem thêm" btn_css="btn_green" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./maucv.scss";
import Button from "../../../components/Button/Button.vue";
import { ThunderboltOutlined } from "@ant-design/icons-vue";
import SelectOptionBase from "../../../components/SelectOption/SelectOptionBase.vue";
export default {
  components: { Button, SelectOptionBase, ThunderboltOutlined },
  data() {
    return {
      language: [
        {
          value: "vn",
          label: "Tiếng Việt",
        },
        {
          value: "us",
          label: "Tiếng Anh",
        },
        {
          value: "japan",
          label: "Tiếng Nhật",
        },
      ],
      typecv: [
        {
          value: "1",
          label: "Giá dục, đào tạo - Junio",
        },
        {
          value: "2",
          label: "Marketing, Truyền thông, quảng cáo - Junio",
        },
        {
          value: "3",
          label: "Kinh doanh bán hàng - Mid level",
        },
        {
          value: "4",
          label: "Kinh doanh bán hàng - Senior",
        },
        {
          value: "5",
          label: "Kinh doanh bán hàng - Junio",
        },
        {
          value: "6",
          label: "Tư vấn - Junior",
        },
        {
          value: "7",
          label: "Tài chính văn phòng - Junior",
        },
        {
          value: "8",
          label: "Vận tải kho vận - Junior ",
        },
        {
          value: "9",
          label: "IT phần mềm - Junior",
        },
        {
          value: "10",
          label: "Kế toán kiểm toán - Junior",
        },
        {
          value: "11",
          label: "Y tế dược - Junior",
        },
        {
          value: "12",
          label: "Biên dịch viên - Junior",
        },
        {
          value: "13",
          label: "Quản lý chất lượng - Junior",
        },
        {
          value: "14",
          label: "Nhân sự - Junior",
        },
        {
          value: "15",
          label: "Cơ khí, chế tạo, tự động hóa - Junior",
        },
        {
          value: "16",
          label: "Giáo dục đào tạo - Mid level",
        },
        {
          value: "17",
          label: "Tư vấn - Mid level",
        },
        {
          value: "18",
          label: "Tài chính văn phòng - Mid level",
        },
        {
          value: "19",
          label: "Vận tải kho vận - Mid level",
        },
        {
          value: "20",
          label: "IT phần mềm - Mid level",
        },
        {
          value: "21",
          label: "Kế toán kiểm toán - Mid level",
        },
      ],
      degisn: [
        {
          value: "1",
          label: "Tất cả thiết kế",
        },
        {
          value: "2",
          label: "Đơn giản",
        },
        {
          value: "3",
          label: "Thanh lịch",
        },
        {
          value: "4",
          label: "Kinh nghiệm",
        },
        {
          value: "5",
          label: "Màu sắc",
        },
        {
          value: "6",
          label: "Sáng tạo",
        },
        {
          value: "7",
          label: "Chuyên nghiệp",
        },
        {
          value: "8",
          label: "Trang trọng",
        },
        {
          value: "9",
          label: "Chuyền thống",
        },
        {
          value: "10",
          label: "Thương hiệu",
        },
        {
          value: "11",
          label: "Xã hội",
        },
        {
          value: "12",
          label: "Công nghệ",
        },
      ],
      styleCv: "new",
      styleBuilder: "builder2",
    };
  },
  computed: {},
  methods: {
    builder(style) {
      this.styleBuilder = style;
    },
  },
};
</script>

<style></style>
