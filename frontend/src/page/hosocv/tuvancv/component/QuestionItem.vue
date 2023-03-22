<template>
  <a-collapse v-model:activeKey="activeKey">
    <a-collapse-panel
      key="1"
      header="Quy trình đăng ký dịch vụ Tư vấn CV Tiếng Việt / Tiếng Anh như thế nào?"
    >
      <p v-html="step1"></p>
    </a-collapse-panel>
    <a-collapse-panel
      key="2"
      header=" Quy trình đăng ký dịch vụ Dịch CV Việt - Anh như thế nào?"
    >
      <p v-html="step2"></p>
    </a-collapse-panel>
    <a-collapse-panel
      key="3"
      header="Quy trình đăng kí dịch vụ Viết CV Nhanh Tiếng Anh & Tiếng Việt "
    >
      <p v-html="step3"></p>
    </a-collapse-panel>
    <a-collapse-panel
      key="4"
      header=" Tôi chưa từng sử dụng dịch vụ kiểu này bao giờ. Tôi nên kỳ vọng gì?"
    >
      <p v-html="step4"></p>
    </a-collapse-panel>
    <a-collapse-panel
      key="5"
      header="Nếu tôi không hài lòng với buổi tư vấn & CV? "
    >
      <p v-html="step5"></p>
    </a-collapse-panel>
    <a-collapse-panel key="6" header=" Bạn có câu hỏi khác?">
      <p v-html="step6"></p>
    </a-collapse-panel>
  </a-collapse>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  setup() {
    const step1 = ` Bước 1: Đăng ký (kèm CV & JD), chuyển khoản hoàn thành đăng ký.
          <br />Bước 2: Tối đa 72 giờ từ khi TopCV xác nhận thanh toán, TopCV
          gửi nhận xét lần 1 (hình thức, cấu trúc, nội dung, độ phù hợp) tới bạn
          qua email. <br />Bước 3: Trong vòng 1 tuần kể từ khi nhận được nhận
          xét, bạn sửa lại và phản hồi cho TopCV. <br />Bước 4: TopCV gửi lại
          nhận xét lần 2 và đóng dịch vụ.`;
    const step2 = ` Bước 1: Đăng ký (kèm CV & JD), chuyển khoản xác nhận.
          <br />
          Bước 2: Tối đa 72 giờ từ khi TopCV xác nhận thanh toán, TopCV sẽ gửi
          lại bạn bản dịch CV Tiếng Anh lần 1. <br />Bước 3: Trong vòng 3 ngày
          kể từ khi nhận được bản dịch, bạn phản hồi cho TopCV nếu cần chỉnh sửa
          thêm. <br />Bước 4: TopCV gửi lại bản chỉnh sửa (nếu có) và đóng dịch
          vụ.
          <br />
          <br />
          <b>Lưu ý:</b> Nếu bạn cần gấp bản dịch trong vòng 24 giờ, vui lòng
          đăng ký dịch vụ Viết CV Nhanh Tiếng Anh để được TopCV hỗ trợ nhanh
          nhất.`;
    const step3 = `Bước 1: Đăng ký (kèm CV nếu có & JD), chuyển khoản xác nhận.
          <br />
          Bước 2: TopCV viết và thiết kế CV dựa trên thông tin bạn cung cấp và
          gửi lại. Có thể gọi điện/nhắn tin để lấy thêm thông tin. <br />Bước 3:
          Trong vòng 3 ngày kể từ khi nhận được CV, bạn phản hồi cho TopCV nếu
          cần chỉnh sửa thêm. <br />Bước 4: TopCV gửi lại bản chỉnh sửa (nếu có)
          và đóng dịch vụ. `;
    const step4 = ` Với hàng triệu ứng viên và hàng trăm nghìn công việc đang tuyển dụng
          trên nền tảng TopCV, chúng tôi hiểu rất rõ một công ty muốn nhận một
          bản CV như thế nào từ ứng viên. Các chuyên gia của chúng tôi sẽ xem
          xét tất cả các yếu tố nhỏ nhất trong CV có thể ảnh hưởng đến khả năng
          trúng tuyển của bạn. Ví dụ, hình thức thiết kế, lỗi ngữ pháp trong
          tiếng Anh, cách dùng từ phù hợp với chuyên ngành, cấu trúc và độ dài
          câu và các đoạn, giọng điệu, vân vân.
          <br />
          <br />
          Dựa trên công việc bạn đang dự định nộp, lý tưởng nhất là có sẵn một
          tin tuyển dụng bạn quan tâm, chúng tôi sẽ giúp bạn viết CV phù hợp
          nhất để giúp bạn NỔI BẬT, KHÁC BIỆT với ứng viên khác và PHÙ HỢP với
          công việc bạn đang nộp. Đây là yếu tố rất quan trọng và chỉ duy nhất
          TopCV cung cấp trên thị trường hiện nay.
          <br />
          <br />
          Để dịch vụ tư vấn đạt hiệu quả cao nhất, những thông tin bạn cung cấp
          và các câu hỏi bạn đặt cho chuyên gia cũng rất quan trọng. Càng nhiều
          thông tin rõ ràng, càng nhiều câu hỏi sâu bạn sẽ càng đạt được hiệu
          quả cao hơn khi sử dụng dịch vụ. `;
    const step5 = ` Khi buổi tư vấn đã kết thúc hoặc bạn đã nhận được CV viết bởi chuyên
          gia, nếu bạn chưa hài lòng với chất lượng dịch vụ, chúng tôi khuyến
          khích bạn chia sẻ những vấn đề, góp ý trong form phản hồi dịch vụ.
          Trong đa số các trường hợp, chuyên gia sẵn sàng hỗ trợ bạn thêm. `;
    const step6 = ` Đội ngũ của TopCV luôn sẵn sàng giải đáp thắc mắc của bạn. Vui lòng
          liên hệ:
          <br />
          <br />
          Điện thoại: (024) 6680 5588 (giờ hành chính) <br />
          Email: hotro@topcv.vn `;
    const activeKey = ref([""]);
    watch(activeKey, (val) => {
      console.log(val);
    });
    return {
      step1,
      step2,
      step3,
      step4,
      step5,
      step6,
      activeKey,
    };
  },
});
</script>
