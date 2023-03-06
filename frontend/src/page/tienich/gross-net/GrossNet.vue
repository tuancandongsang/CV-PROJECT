<template>
  <div id="gross-net">
    <div class="tools defaul-container">
      <h3>Công cụ tính lương Gross sang Net / Net sang Gross chuẩn 2023</h3>
      <p>
        Áp dụng mức giảm trừ gia cảnh mới nhất 11 triệu đồng/tháng (132 triệu
        đồng/năm) với nguời nộp thuế và 4,4 triệu đồng/tháng với mỗi người phụ
        thuộc (Theo Nghị quyết số 954/2020/UBTVQH14)
      </p>
      <P
        >Áp dụng mức lương <a href="#">tối thiểu vùng</a> mới nhất có hiệu lực
        từ ngày 01/07/2022 (Theo điều 3, Nghị định 38/2022/NĐ-CP)</P
      >
      <div class="tools-regulations">
        <div class="tools-regulations-select">
          <p><b>Áp dụng quy định:</b></p>
          <div>
            <input type="radio" id="new" name="time" value="new" />
            <label for="new">Từ 01/07/2022 <b>(Mới nhất)</b></label
            ><br />
          </div>
          <div>
            <input type="radio" id="late" name="time" value="late" />
            <label for="late">Từ 01/07/2020 - 30/06/2022</label><br />
          </div>
        </div>
        <div class="tools-regulations-define">
          <p>Lương cơ sở: <span>1,490,000đ</span></p>
          <p>Giảm trừ gia cảnh bản thân: <span>11,000,000đ</span></p>
          <p>Người phụ thuộc: <span>4,400,000đ</span></p>
        </div>
      </div>
      <div>
        <p><b>Thu Nhập:</b></p>
        <Input
          placeholder="VD: 10,000,000"
          type="text"
          cssColorBorder="greenBorder"
          cssColor="greenColor"
        >
          <template #left><pound-outlined /></template>
          <template #right> <span>(VND)</span> </template>
        </Input>
      </div>
      <div>
        <p><b>Mức lương đóng bảo hiểm:</b></p>
        <div>
          <label for=""><b>Trên lương chính thức:</b></label>
          <input type="radio" id="new" name="chinhthuc" value="chinhthuc" />
        </div>
        <div>
          <label for=""><b>Khác:</b></label>
          <input type="radio" id="new" name="khac" value="khac" />
          <Input
            placeholder="VD: 10,000,000"
            type="text"
            cssColorBorder="greenBorder"
            cssColor="greenColor"
          >
            <template #left><pound-outlined /></template>
            <template #right> <span>(VND)</span> </template>
          </Input>
        </div>
      </div>
      <div class="vung">
        <p>
          <b>Vùng: <a href="#">(Giải thích)</a></b>
        </p>
        <input type="radio" id="1" name="1" value="1" />
        <label for="1">I</label><br />
        <input type="radio" id="2" name="2" value="2" />
        <label for="2">II</label><br />
        <input type="radio" id="3" name="3" value="3" />
        <label for="3">III</label><br />
        <input type="radio" id="4" name="4" value="4" />
        <label for="4">IV</label><br />
      </div>
      <div class="phuthuoc">
        <p><b>Số người phụ thuộc:</b></p>
        <Input
          placeholder="Số người phụ thuộc"
          type="number"
          cssColorBorder="greenBorder"
          cssColor="greenColor"
        >
          <template #left><team-outlined /></template>
          <template #right> <span>(VND)</span> </template>
        </Input>
      </div>
      <div>
        <ButtonVue content="GROSS --> NET" btn_css="btn_green" />
        <ButtonVue content="NET --> GROSS" btn_css="button_second" />
      </div>
    </div>
    <div class="defaul-container noti">
      <span class="noti-header"><bell-outlined /> Thông báo mới nhất</span>
      <h3>Mức lương cơ sở năm 2021 của cán bộ, công chức, viên chức</h3>
      <p>
        Ngày 12/11/2020, tại kỳ họp thứ 10, Quốc hội khóa XIV, Quốc hội đã chính
        thức thông qua Nghị quyết về dự toán ngân sách Nhà nước năm 2021. Một
        trong điểm nội dung đáng chú ý trong Nghị quyết lần này là trong năm
        2021 <b>sẽ không tăng lương cơ sở cho cán bộ, công chức, viên chức.</b>
      </p>
      <p>
        Cụ thể, <b>lương cơ sở năm 2021 vẫn là 1,49 triệu đồng/tháng</b> như
        hiện nay, căn cứ theo
        <a href="#">Nghị định số 38 năm 2019 của Chính phủ.</a> Ngoài ra, lương
        và phụ cấp theo lương của cán bộ, công chức, viên chức cũng không thay
        đổi.
      </p>
    </div>
    <div class="defaul-container explain">
      <div>
        <span> <facebook-outlined /> Khuyên dùng 727</span>
        <span> Chú thích</span>
      </div>
      <h4>Lương Gross là gì? Lương Net là gì?</h4>
      <p>
        Lương Gross là tổng thu nhập của người lao động, bao gồm cả các khoản
        đóng bảo hiểm và thuế. Mức lương thực nhận của bạn thuờng sẽ thấp hơn
        mức này vì bạn phải trích ra một phần để đóng bảo hiểm và nộp thuế thu
        nhập cá nhân.
      </p>
      <p>
        Lương Net là lương thực nhận của bạn sau khi đã trừ hết các khoản chi
        phí bảo hiểm và thuế thu nhập cá nhân, hiểu đơn giản nó chính là số tiền
        bạn có thể bỏ túi.
      </p>
      <p>Diễn giải quan hệ giữa lương Gross và lương Net bằng công thức:</p>
      <div>
        <h2>LUƠNG NET = LƯƠNG GROSS - (BHXH + BHYT + BHTN + THUẾ TNCN)</h2>
      </div>
      <h3>Lương Gross hay lương Net có lợi hơn cho người lao động?</h3>
      <p>
        Nếu thoạt nhìn có thể bạn cho rằng lương Net có lợi hơn vì đó chính là
        số tiền bạn nhận được, còn lương Gross thì bạn có cảm giác bị mất đi một
        khoản khi nhận lương.
      </p>
      <p>
        Trên thực tế khi bạn quy đổi lương Net sang Gross hay từ Gross sang Net
        thì số tiền bạn nhận được không đổi, dù bạn đàm phàn với nhà tuyển dụng
        bằng cách nào nào thì nhà tuyển dụng sẽ tính toán để lương Net và lương
        Gross ở mức tương đương nhau.
      </p>
      <div>
        <p>
          Ví dụ: Mức lương Gross là 15,000,000 VND sẽ tương đương với mức lương
          Net 13,303,750 VND trong trường hợp đóng bảo hiểm trên lương chính
          thức Vậy nên khi nhà tuyển dụng quyết định trả bạn mức lương Gross là
          15,000,000 VND, nếu bạn đàm phán mức lương Net thì lương của bạn sẽ là
          13,303,750 VND và ngược lại. Về cơ bản lương bạn nhận được vẫn không
          đổi dù bạn đàm phán lương Net hay Gross. Theo quy định mới nhất (Từ
          01/07/2022)
        </p>
      </div>
      <p>
        Tuy nhiên nếu tinh ý, bạn sẽ thấy rằng khi sử dụng lương Gross mức lương
        bạn nhận được sẽ minh bạch hơn. Với mức lương Gross bạn sẽ chủ động tính
        toán được mức lương Net của mình và biết được các khoản bảo hiểm, thuế
        mà công ty đóng cho bạn, nguợc lại với lương Net có thể bạn sẽ không
        biết được mức bảo hiểm công ty đóng cho mình là bao nhiêu.
      </p>
      <div>
        Ví dụ: Mức lương Net là 13,500,000 VND - Trường hợp đóng bảo hiểm trên
        mức lương chính thức lương Gross sẽ là 15,230,815 VND - Trường hợp đóng
        bảo hiểm ở mức 5,000,000 VND lương Gross sẽ là 14,156,579 VND Như ví dụ
        trên, bạn có thể thấy cùng một mức lương Net nhưng với mức đóng bảo hiểm
        khác nhau mức lương Gross bạn nhận được chênh nhau khá nhiều, lương
        Gross sẽ thể hiện chính xác quyền lợi bạn nhận được hơn là lương Net.
        Theo quy định mới nhất (Từ 01/07/2022)
      </div>
      <p>
        Vậy nên, nếu có thể bạn hãy đàm phán với nhà tuyển dụng bằng luơng
        Gross, còn nếu nhà tuyển dụng và bạn làm việc với nhau trên lương Net
        thì bạn có thể hỏi rõ về mức đóng bảo hiểm mà công ty đóng cho bạn để
        nắm được chính xác hơn quyền lợi của mình.
      </p>
      <h3>Cách chuyển đổi lương Gross sang Net / Lương Net sang Gross</h3>
      <div>
        <img
          src="https://static.topcv.vn/manual/cong-cu-tinh-luong-gross-net-topcv.png"
          alt=""
        />
        <p>
          Công cụ tính lương net sang gross, gross sang net chuẩn 2023 trên
          TopCV
        </p>
      </div>
      <p>
        Cách đơn giản nhất là các bạn có thể sử dụng công cụ chuyển đổi lương
        Net sang Gross và Gross sang Net của TopCV. Bạn chỉ cần cung cấp các
        thông số: Lương, mức đóng bảo hiểm, vùng và số người phụ thuộc, công cụ
        sẽ tính toán và phân tích diễn giải từng loại chi phí để bạn hiểu rõ
        nhất mức lương của mình.
      </p>
      <p>
        Bản quyền nội dung thuộc về TopCV.vn, được bảo vệ bởi Luật bảo vệ bản
        quyền tác giả DMCA.
      </p>
      <p>
        Vui lòng không trích dẫn nội dung trang web khi chưa được sự cho phép
        của TopCV.
      </p>
      <div>
        <span> <facebook-outlined /> Khuyên dùng 727</span>
        <span> Chú thích</span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BellOutlined,
  PoundOutlined,
  TeamOutlined,
} from "@ant-design/icons-vue";
import ButtonVue from "@/components/Button/Button.vue";
import Input from "@/components/input/Input.vue";

import "./grossnet.scss";
export default {
  components: {
    BellOutlined,
    Input,
    ButtonVue,
    PoundOutlined,
    TeamOutlined,
  },
};
</script>

<style></style>