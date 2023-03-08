<template>
  <div id="baohiemthatnghiep">
    <div class="defaul-container recipe">
      <h3>Công cụ tính mức hưởng bảo hiểm thất nghiệp chính xác nhất 2023</h3>
      <p>
        <i
          >Mức hưởng bảo hiểm thất nghiệp được quy đinh tại điều 50, Luật việc
          làm 2013 và được hướng dẫn chi tiết tại điều 8, Nghị định
          28/2015/NĐ-CP</i
        >
      </p>
      <p class="region-detail">
        Áp dụng mức lương tối thiểu vùng mới nhất có hiệu lực từ ngày 1/1/2020
        (Theo điều 3, Nghị định 90/2019/NĐ-CP)
      </p>
      <div class="select6month">
        <div>
          <input
            type="radio"
            id="nochange"
            name="salary6month"
            value="nochangesalary6month"
            v-model="salary6month"
          />
          <label for="nochange"
            >Lương đóng BH không thay đổi trong 6 tháng</label
          ><br />
        </div>
        <div>
          <input
            type="radio"
            id="change"
            name="salary6month"
            value="changesalary6month"
            v-model="salary6month"
          />
          <label for="change">Lương đóng BH thay đổi trong 6 tháng</label><br />
        </div>
      </div>
      <h3><b>Tiền lương đóng BHTN:</b></h3>
      <div class="fivety-percent">
        <Input
          placeholder="6,000,000"
          type="number"
          cssColorBorder="greenBorder"
          cssColor="greenColor"
          lable=""
          ref="salary"
        >
          <template #left>
            <pound-outlined />
          </template>
          <template #right>
            <span>(VND)</span>
          </template>
        </Input>
      </div>
      <p class="explain">
        (Bình quân tiền lương tháng đóng BHTN của 06 tháng liền kề trước khi
        thất nghiệp)
      </p>
      <h3><b>Tổng thời gian đóng BHTN chưa hưởng:</b></h3>
      <div class="fivety-percent">
        <Input
          placeholder="12"
          type="number"
          cssColorBorder="greenBorder"
          cssColor="greenColor"
          lable=""
          ref="month"
        >
          <template #left>
            <calendar-outlined />
          </template>
          <template #right>
            <span>(Month)</span>
          </template>
        </Input>
      </div>
      <p class="explain">
        (Thời gian đóng bảo hiểm thất nghiệp – Thời gian đã hưởng trợ cấp thất
        nghiệp)
      </p>
      <div class="company">
        <div>
          <h4><b>Chế độ tiền lương </b></h4>
          <div>
            <input
              type="radio"
              id="government"
              name="company"
              value="government"
              v-model="company"
            />
            <label for="government">Doanh nghiệp nhà nước</label><br />
          </div>
          <div>
            <input
              type="radio"
              id="individual"
              name="company"
              value="individual"
              v-model="company"
            />
            <label for="individual">Doanh nghiệp tư nhân</label><br />
          </div>
        </div>
        <div>
          <h3><b>Vùng</b> <router-link to="/">(Giải thích):</router-link></h3>
          <div>
            <SelectOption placeholder="Chọn vùng" :options="region" />
          </div>
        </div>
      </div>
      <div class="submit">
        <div class="fivety-percent">
          <Button
            content="Tính bảo hiểm"
            btn_css="btn_green"
            @click="calculate"
          />
        </div>
      </div>
    </div>
    <div class="defaul-container detail">
      <h3>
        <b
          >Bảo hiểm thất nghiệp là gì? Cách tính bảo hiểm thất nghiệp mới nhất
          2023</b
        >
      </h3>
      <h3><b>Bảo hiểm thất nghiệp là gì?</b></h3>
      <p>
        Bảo hiểm thất nghiệp là hình thức bảo hiểm bắt buộc với mục đích xã hội
        và không vì lợi nhuận. Theo Điều 42 Luật Việc làm 2013, quyền lợi khi
        tham gia BHTN bao gồm:
      </p>
      <p>- Khoản tiền trợ cấp thất nghiệp;</p>
      <p>- Hỗ trợ học nghề;</p>
      <p>- Hỗ trợ tư vấn và giới thiệu việc làm;</p>
      <p>- Hỗ trợ giúp đào tạo, nâng cao trình độ của nghề</p>
      <h3><b>Công cụ tính bảo hiểm thất nghiệp mới nhất 2023</b></h3>
      <p>
        Vậy
        <router-link to="/">bảo hiểm thất nghiệp tính như thế nào?</router-link>
      </p>
      <p>
        Tính đến thời điểm hiện tại, mức lãnh bảo hiểm thất nghiệp được quy định
        rõ ràng tại Điều 50, Luật Việc làm năm 2013, cụ thể cách tính mức hưởng
        bảo hiểm thất nghiệp như sau:
      </p>
      <div class="table">
        <table>
          <tr>
            <th>Mức hưởng hàng tháng</th>
            <th>=</th>
            <th>
              Mức trung bình tiền lương đóng bảo hiểm thất nghiệp hàng tháng của
              06 tháng gần nhất trước khi thất nghiệp
            </th>
            <th>* 60%</th>
          </tr>
        </table>
      </div>
      <p>
        Mức hưởng lương hàng tháng tối đa không quá 5 lần mức lương cơ sở với
        người lao động thực hiện chế độ lương theo quy định của Nhà nước, hoặc
        sẽ không quá 5 lần so với quy định về mức lương cơ bản tối thiểu của
        vùng đối với người lao động thực hiện chế độ lương do bên người sử dụng
        lao động đưa ra.
      </p>
      <p><b>Ví dụ 1:</b></p>
      <p>
        <i
          >Ông A làm nhà nước, đóng bảo hiểm thất nghiệp được 12 tháng với mức
          lương trung bình 6 tháng cuối cùng 13 triệu đồng/tháng. Công thức tính
          bảo hiểm thất nghiệp của ông A được tính như sau:</i
        >
      </p>
      <ul>
        <li>
          Mức hưởng trợ cấp thất nghiệp tối đa = lương cơ sở * 5 = 1,49 * 5 =
          7,45 triệu đồng/tháng
        </li>
        <li>
          Trợ cấp thất nghiệp theo công thức = 13 * 60% = 7,8 triệu đồng/tháng
        </li>
      </ul>
      <p>
        Vì không thể vượt quá mức hưởng trợ cấp thất nghiệp tối đa nên ông A
        được hưởng 7,45 triệu đồng/tháng trong thời hạn 3 tháng.
      </p>
      <p><b>Ví dụ 2:</b></p>
      <p>
        <i
          >Bà B đóng bảo hiểm thất nghiệp được 62 tháng khi làm việc tại doanh
          nghiệp tư nhân ở vùng 2 với mức lương trung bình 6 tháng cuối cùng là
          6 triệu đồng/tháng. Thời gian được hưởng trợ cấp thất nghiệp của bà C
          được tính như sau:</i
        >
      </p>
      <ul>
        <li>36 tháng đầu tiên: hưởng 3 tháng trợ cấp</li>
        <li>23 tháng tiếp theo: hưởng 2 tháng trợ cấp</li>
        <li>
          2 tháng còn lại: cộng dồn cho lần hưởng bảo hiểm thất nghiệp tiếp theo
        </li>
      </ul>
      <p>
        <i
          >Như vậy bà C được hưởng 5 tháng trợ cấp thất nghiệp với mức hưởng mỗi
          tháng là 6 * 60% = 3,6 triệu đồng/tháng</i
        >
      </p>
      <p><b>Ví dụ 3: </b></p>
      <p>
        <i
          >Ông C đóng bảo hiểm thất nghiệp được 15 tháng khi làm việc tại doanh
          nghiệp tư nhân ở vùng 2 với mức lương trung bình 6 tháng cuối cùng là
          35 triệu đồng/tháng. Thời gian và công thức tính bảo hiểm thất nghiệp
          của ông C được tính như sau:</i
        >
      </p>
      <ul>
        <li>15 tháng: hưởng 3 tháng trợ cấp thất nghiệp</li>
        <li>
          Mức hưởng trợ cấp thất nghiệp tối đa tại vùng 2 = lương tối thiểu vùng
          * 5 = 3,92 * 5 = 19,6 triệu đồng/tháng
        </li>
        <li>
          Trợ cấp thất nghiệp theo công thức = 35 * 60% = 21 triệu đồng/tháng
        </li>
      </ul>
      <p>
        <i
          >Vì không thể vượt quá mức hưởng trợ cấp thất nghiệp tối đa nên ông C
          được hưởng 19,6 triệu đồng/tháng trong thời hạn 3 tháng.</i
        >
      </p>
      <p>
        <i
          >Cách đơn giản nhất là các bạn có thể sử dụng công cụ tính bảo hiểm
          thất nghiệp mới nhất 2023 của TopCV. Bạn chỉ cần cung cấp các thông
          số:</i
        >
      </p>
      <ul>
        <li>
          Bình quân tiền lương tháng đóng BHTN của 06 tháng liền kề trước khi
          thất nghiệp
        </li>
        <li>
          Tổng thời gian đóng BHTN chưa hưởng (Thời gian đóng bảo hiểm thất
          nghiệp – Thời gian đã hưởng trợ cấp thất nghiệp)
        </li>
        <li>Chế độ tiền lương (doanh nghiệp hoặc nhà nước)</li>
        <li>Vùng (đối với doanh nghiệp)</li>
      </ul>
      <p>
        Công cụ sẽ tính toán và phân tích diễn giải từng loại chi phí để bạn
        hiểu rõ nhất mức lương của mình.
      </p>
      <h3>
        <b
          >Một số thông tin liên quan tới bảo hiểm thất nghiệp mới nhất 2023 bạn
          cần nắm rõ</b
        >
      </h3>
      <h3><b>Thời gian được hưởng bảo hiểm thất nghiệp</b></h3>
      <p>Thời gian được hưởng BHTN như sau:</p>
      <p>
        - Đối với người đóng đủ từ 12 tháng đến 36 tháng được hưởng 3 tháng trợ
        cấp;
      </p>
      <p>
        - Sau 36 tháng, mỗi 12 tháng tham gia đủ BHTN sẽ được hưởng thêm 1 tháng
        trợ cấp, số tháng được hưởng trợ cấp thất nghiệp không quá 12 tháng;
      </p>
      <p>
        - Thời điểm để được hưởng trợ cấp tính từ ngày thứ 16 sau khi nộp đủ hồ
        sơ xin hưởng trợ cấp thất nghiệp;
      </p>
      <p>- Với các khoản hỗ trợ khác sẽ được tính như sau:</p>
      <p>Hỗ trợ tư vấn và giới thiệu việc làm: Miễn phí;</p>
      <p>
        Hỗ trợ học nghề: Thời gian hỗ trợ không quá 6 tháng, tối đa được hỗ trợ
        1 triệu đồng/tháng/người
      </p>
      <h3><b>Đối tượng được nhận bảo hiểm thất nghiệp</b></h3>
      <p>Các đối tượng sau đây sẽ được hưởng bảo hiểm, trợ cấp thất nghiệp:</p>
      <p>
        - Có hợp đồng lao động/hợp đồng làm việc được ký vô thời hạn, không xác
        định thời hạn;
      </p>
      <p>
        - Có hợp đồng lao động /hợp đồng làm việc được ký kết trong thời gian
        nhất định, có thời hạn;
      </p>
      <p>
        - Có hợp đồng lao động thời vụ hoặc đang theo làm một công việc nhất
        định có thời gian từ 03 – dưới 13 tháng;
      </p>
      <p>
        - Với trường hợp người lao động thực hiện, ký kết nhiều hợp đồng lao
        động/hợp đồng làm việc thì người lao động và người sử dụng sẽ được tính
        trợ cấp thất nghiệp theo hợp đồng lao động được ký sớm nhất, có tham gia
        BHTN.
      </p>
      <h3><b>Điều kiện hưởng bảo hiểm thất nghiệp</b></h3>
      <p>
        Đối với BHTN, điều kiện để được hưởng trợ cấp thất nghiệp sẽ được quy
        định như sau:
      </p>
      <p>
        * Người lao động đã chấm dứt hợp đồng lao động/hợp đồng làm việc. Một số
        trường hợp loại trừ không được hưởng BHTN bao gồm:
      </p>
      <p>
        - NLĐ đơn phương chấm dứt hợp đồng làm việc/hợp đồng lao động trái với
        quy định pháp luật;
      </p>
      <p>- NLĐ đang được hưởng lương hưu hoặc trợ cấp mất sức lao động.</p>
      <p>* Đối với người lao động đã đóng đủ BHTN:</p>
      <p>
        - NLĐ đã đóng BHTN từ 12 – 24 tháng trước ngày kết thúc hợp đồng lao
        động có thời hạn hoặc không có thời hạn;
      </p>
      <p>
        - NLĐ đã đóng BHTN từ 12 – 36 tháng trước khi kết thúc hợp đồng lao động
        thời vụ hoặc 01 công việc nhất định với thời hạn hợp đồng lao động/làm
        việc từ 3 – 12 tháng.
      </p>
      <p>
        * NLĐ đã đăng ký thất nghiệp, nộp đầy đủ hồ sơ theo quy định tại Trung
        tâm dịch vụ việc làm.
      </p>
      <p>
        * NLĐ chưa tìm được việc sau 15 ngày, kể từ ngày hồ sơ được nộp, trừ các
        trường hợp:
      </p>
      <p>- Đi học với thời hạn từ 12 tháng trở lên;</p>
      <p>
        - Đối tượng là NLĐ phải thực hiện nghĩa vụ công an, nghĩa vụ quân sự;
      </p>
      <p>
        - Đối tượng là người đang bị tạm giam hoặc đang chấp hành hình phạt tù;
      </p>
      <p>
        - Đối tượng là người ra nước ngoài định cư, đi lao động theo hợp đồng ở
        nước ngoài;
      </p>
      <p>
        - Đối tượng là người lao động phải thực hiện các biện pháp đưa vào cơ sở
        cai nghiện, trường giáo dưỡng, cơ sở giáo dục bắt buộc;
      </p>
      <p>- Chết.</p>
      <h3><b>Hồ sơ hưởng bảo hiểm thất nghiệp</b></h3>
      <p>
        Theo <router-link to="/">Điều 16 Nghị định 28/2015/NĐ-CP</router-link>,
        hồ sơ BHTN sẽ bao gồm các loại giấy tờ sau đây:
      </p>
      <p>* Sổ bảo hiểm xã hội</p>
      <p>
        * Đơn đề nghị được hưởng trợ cấp TN (theo mẫu quy định của nhà nước)
      </p>
      <p>* Bản sao có chứng thực/bản chính một trong các giấy tờ sau:</p>
      <p>
        - Hợp đồng lao động/hợp đồng làm việc đã hết hạn hoặc hoàn thành công
        việc;
      </p>
      <p>
        - Giấy tờ xác nhận chấm dứt hợp đồng lao động hoặc công việc thời vụ (có
        thời hạn 03 – 12 tháng);
      </p>
      <p>- Quyết định thôi việc;</p>
      <p>- Quyết định kỷ luật buộc thôi việc;</p>
      <p>- Quyết định sa thải;</p>
      <p>
        - Thông báo/thỏa thuận chấm dứt hợp đồng làm việc/hợp đồng lao động.
      </p>
      <h3><b>Thủ tục nhận bảo hiểm thất nghiệp</b></h3>
      <p>Thủ tục hưởng bảo hiểm thất nghiệp sẽ bao gồm 4 bước sau đây:</p>
      <p>
        - Bước 1: Nộp hồ sơ để hưởng BHTN tại các trung tâm dịch vụ việc làm
        trong thời gian không quá 3 tháng kể từ ngày chấm dứt HĐLĐ.
      </p>
      <p>
        - Bước 2: Trong vòng không quá 20 ngày, bạn sẽ được nhận quyết định
        hưởng trợ cấp thất nghiệp/văn bản từ chối tại trung tâm dịch vụ việc
        làm.
      </p>
      <p>
        - Bước 3: Trong vòng không quá 5 ngày từ ngày nhận quyết định hưởng trợ
        cấp, bạn cần đến cơ quan BHXH để nhận trợ cấp tháng đầu tiên.
      </p>
      <p>
        - Bước 4: Đến cơ quan, trung tâm dịch vụ việc làm để thông báo tìm kiếm
        việc làm mới theo quy định.
      </p>
      <p>
        Trên đây là những chia sẻ của chúng tôi về bảo hiểm thất nghiệp và công
        cụ tính bảo hiểm thất nghiệp mới nhất 2023. Hy vọng qua bài viết này bạn
        sẽ nắm được cách tính bảo hiểm thất nghiệp, từ đó đảm bảo quyền lợi của
        bản thân.
      </p>
      <div class="warnning">
        <p>
          Bản quyền nội dung thuộc về TopCV.vn, được bảo vệ bởi Luật bảo vệ bản
          quyền tác giả DMCA. Vui lòng không trích dẫn nội dung trang web khi
          chưa được sự cho phép của TopCV.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import "./baohiemthatnghiep.scss";
import {
  PoundOutlined,
  CalendarOutlined,
  BulbOutlined,
} from "@ant-design/icons-vue";
import Button from "@/components/Button/Button.vue";
import Input from "@/components/input/Input.vue";
import SelectOption from "@/components/SelectOption/SelectOptionBase.vue";
export default {
  components: {
    Button,
    Input,
    PoundOutlined,
    CalendarOutlined,
    SelectOption,
    BulbOutlined,
  },
  methods: {
    calculate() {
      console.log(this.salary6month);
      console.log(this.company);
      console.log(this.$refs.salary.value);
      console.log(this.$refs.month.value);
    },
  },
  data() {
    return {
      region: [
        {
          value: "jack",
          label: "Jack",
        },
        {
          value: "tuan",
          label: "tuan",
        },
      ],
      salary: undefined,
      month: undefined,
      salary6month: "",
      company: "",
    };
  },
};
</script>

<style></style>
