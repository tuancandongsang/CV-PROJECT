<template>
  <div id="thunhapcanhan">
    <div class="defaul-container calculation-table">
      <h2>Công cụ tính Thuế thu nhập cá nhân chuẩn 2023</h2>
      <div class="apply">
        <div class="apply-icon"><info-circle-outlined /></div>
        <p>
          Áp dụng mức giảm trừ gia cảnh mới nhất 11 triệu đồng/tháng (132 triệu
          đồng/năm) với người nộp thuế và 4,4 triệu đồng/tháng với mỗi người phụ
          thuộc (Theo Nghị Quyết số 954/2020/UBTVQH14)
        </p>
      </div>
      <div class="reduce">
        <div class="item">
          <p>Giảm trừ gia cảnh bản thân:</p>
          <h3>11,000,000đ</h3>
        </div>
        <div class="item">
          <p>Người phụ thuộc:</p>
          <h3>4,400,000đ</h3>
        </div>
      </div>
      <div class="input-money">
        <h3><b>Thu Nhập (Gross)</b></h3>
        <div class="input-money-input">
          <Input placeholder="VD: 10,000,000" type="number" cssColorBorder="greenBorder" cssColor="greenColor"
            ref="monthlySalary">
          <template #left>
            <PoundOutlined />
          </template>
          <template #right>
            <span>VND</span>
          </template>
          </Input>
        </div>
      </div>
      <div class="insurance-money">
        <div class="title">
          <h3><b>Mức lương đóng bảo hiểm</b></h3>
        </div>
        <div class="insurance-money-radio">
          <input type="radio" id="declare" name="salary" value="declare" v-model="salary" />
          <label for="declare">Trên lương chính thức</label><br />
        </div>
        <div class="insurance-money-radio">
          <input type="radio" id="other" name="salary" value="other" v-model="salary" />
          <label for="other">Khác</label><br />
        </div>
        <div class="insurance-money-input">
          <Input :disabled="disabledInputSaralyInsurance" placeholder="VD: 10,000,000" type="number"
            cssColorBorder="greenBorder" cssColor="greenColor" lable="Thu Nhập (Gross)" ref="otherMonthlySalary">
          <template #left>
            <PoundOutlined />
          </template>
          <template #right>
            <span>VND</span>
          </template>
          </Input>
        </div>
      </div>
      <div class="region">
        <p class="title">
          <b>Vùng: <router-link to="/">(Giải thích)</router-link></b>
        </p>
        <div>
          <input type="radio" id="1" name="region" value="1" v-model="region" />
          <label for="1"><b>I</b></label>
        </div>
        <div>
          <input type="radio" id="2" name="region" value="2" v-model="region" />
          <label for="2"><b>II</b></label>
        </div>
        <div>
          <input type="radio" id="3" name="region" value="3" v-model="region" />
          <label for="3"><b>III</b></label>
        </div>
        <div>
          <input type="radio" id="4" name="region" value="4" v-model="region" />
          <label for="4"><b>IV</b></label>
        </div>
      </div>
      <div class="dependent-people">
        <div class="dependent-people-input">
          <h3><b>Số người phụ thuộc</b></h3>
          <Input placeholder="0" type="number" cssColorBorder="greenBorder" cssColor="greenColor"
            lable="Số người phụ thuộc" :disabled="false" ref="dependentPeople">
          <template #left>
            <team-outlined />
          </template>
          <template #right>
            <span>Người</span>
          </template>
          </Input>
        </div>
      </div>
      <div class="calculate">
        <div class="calculate-button">
          <Button @click="calculateTax" content="Tính thuế TNCN" btn_css="btn_green" />
        </div>
      </div>
    </div>
    <div class="defaul-container explain">
      <h2>Công cụ tính Thuế thu nhập cá nhân mới chính xác nhất 2023</h2>
      <div class="table_contents">
        <h1>Mục lục:</h1>
      </div>
      <p>
        <i>Thuế thu nhập cá nhân là gì? Tại sao cần đóng thuế thu nhập cá nhân?
          Công thức tính thuế thu nhập cá nhân như thế nào? Những thắc mắc liên
          quan tới thuế thu nhập cá nhân bạn cần nắm rõ.</i>
      </p>
      <h3>Thuế thu nhập cá nhân là gì?</h3>
      <p>
        Thuế thu nhập cá nhân (Tiếng Anh: Personal income tax) là khoản tiền mà
        người có thu nhập cần trích từ lương và các nguồn thu khác (nếu có) của
        mình để nộp vào ngân sách nhà nước sau khi đã được giảm trừ.
      </p>
      <p>
        Thuế thu nhập cá nhân không đánh vào tất cả các đối tượng mà có mức
        lương quy định cần đóng riêng, góp phần thu hẹp khoảng cách giữa các
        tầng lớp trong xã hội.
      </p>
      <h3>Công cụ tính thuế thu nhập cá nhân</h3>
      <p>
        Trước khi tính thuế thu nhập cá nhân chúng ta cần xác định đối tượng cần
        đóng thuế thu nhập cá nhân. Đối tượng cần đóng thuế thu nhập cá nhân
        chia ra hai đối tượng chính là cá nhân cư trú và cá nhân không cư trú.
      </p>
      <br />
      <h3>Cá nhân cư trú</h3>
      <h4>Cá nhân cư trú là gì?</h4>
      <p>
        Tham khảo Công văn 3604/TCT-TNCN ngày 04/09/2015 của Tổng Cục Thuế và
        Công văn số 3313/CT-TTHT ngày 22/1/2018 của Cục Thuế TP. Hà Nội, cá nhân
        cư trú bao gồm những đối tượng thỏa mãn một trong hai điều kiện sau:
      </p>
      <p>
        - Cá nhân có nơi ở thường xuyên tại Việt Nam, chia làm một trong hai
        trường hợp sau:
      </p>
      <ul>
        <li>
          Có nhà thuê để ở tại Việt Nam theo quy định của pháp luật về nhà ở, và
          thời hạn của các hợp đồng thuê kéo dài từ 183 ngày trở lên trong năm
          tính thuế.
        </li>
        <li>Có nơi ở thường xuyên theo quy định của pháp luật về cư trú.</li>
      </ul>
      <p>
        - Cá nhân có mặt tại Việt Nam từ 183 ngày trở lên tính trong một năm
        dương lịch hoặc trong 12 tháng liên tục kể từ ngày đầu tiên có mặt tại
        Việt Nam, trong đó ngày đến và ngày đi được tính là 01 ngày. Ngày đến và
        ngày đi được căn cứ vào chứng thực của cơ quan quản lý xuất nhập cảnh
        trên hộ chiếu (hoặc giấy thông hành) của cá nhân khi đến và khi rời Việt
        Nam. Trường hợp nhập cảnh và xuất cảnh trong cùng một ngày thì được tính
        chung là một ngày cư trú.
      </p>
      <h4>Công thức tính thuế thu nhập cá nhân của cá nhân cư trú</h4>
      <p>
        Vậy <router-link to="/">tính thuế thu nhập cá nhân</router-link> tính
        như thế nào? Hãy cùng tham khảo những thông tin dưới đây để có thể tính
        mức thuế thu nhập cá nhân chính xác.
      </p>
      <h4>
        <b>A. Đối với cá nhân ký hợp đồng lao động từ 03 tháng trở lên:</b>
      </h4>
      <div class="box">
        <p>Thuế thu nhập cá nhân phải nộp = Thu nhập tính thuế x Thuế suất</p>
      </div>
      <h4><b>* Diễn giải công thức:</b></h4>
      <p>- Thu nhập tính thuế = Thu nhập chịu thuế - Các khoản giảm trừ</p>
      <p>
        - Thu nhập chịu thuế TNCN = Tổng thu nhập - Các khoản thu nhập được miễn
        thuế TNCN
      </p>
      <p>
        - Tổng thu nhập được xác định theo quy định tại Khoản 2 Điều 2
        <a href="#">Thông tư 111/2013/TT-BTC</a> và Khoản 1, 2, 3, 4, 5 Điều 11
        <a href="#">Thông tư 92/2015/TT-BTC.</a>
      </p>
      <p>
        - Các khoản thu nhập được miễn thuế được xác định là thu nhập từ phần
        tiền lương, tiền công làm việc ban đêm, làm thêm giờ được trả cao hơn so
        với tiền lương, tiền công làm việc ban ngày, làm việc trong giờ theo quy
        định của pháp luật. (Xem thêm tại Điểm i Khoản 1 Điều 3
        <a href="#"> Thông tư 111/2013/TT-BTC).</a>
      </p>
      <h4><b>* Các khoản giảm trừ bao gồm các khoản giảm trừ gia cảnh:</b></h4>
      <p>
        - Đối với người nộp thuế: Mức giảm trừ gia cảnh là 11 triệu đồng/tháng,
        132 triệu đồng/năm.
      </p>
      <p>
        - Đối với người phụ thuộc: Mức giảm trừ gia cảnh là 4,4 triệu
        đồng/người/tháng.
      </p>
      <p>
        - Ngoài ra, giảm trừ gia cảnh còn bao gồm các khoản đóng bảo hiểm, quỹ
        hưu trí tự nguyện theo hướng dẫn tại Khoản 2 Điều 9
        <a href="#">Thông tư 111/2013/TT-BTC.</a> Và các khoản đóng góp từ
        thiện, nhân đạo, khuyến học theo hướng dẫn tại Khoản 3 Điều 9
        <a href="#">Thông tư 111/2013/TT-BTC.</a>
      </p>
      <h4><b>* Thuế suất:</b></h4>
      <p>
        Thuế suất từ tiền lương, tiền công đối với đối tượng ký hợp đồng lao
        động từ 03 tháng trở lên được áp dụng theo lũy tiến từng phần, cụ thể:
      </p>
      <div class="table">
        <table>
          <tr>
            <th>Bậc</th>
            <th>Phần thu nhập tính thuế/năm <br>
              (triệu đồng)</th>
            <th>Phần thu nhập tính thuế/tháng <br>
              (triệu đồng)</th>
            <th>Thuế suất (%)</th>
          </tr>
          <tr v-for="item in tableRankBasic1" :key="item.rank">
            <td>{{ item.rank }} </td>
            <td>{{ item.saraly }} </td>
            <td>{{ item.taxMoney }}</td>
            <td>{{ item.tax }}</td>
          </tr>
        </table>
      </div>
      <p>
        Có thêm tham khảo thêm công thức tính thuế thu nhập cá nhân rút gọn,
        công thức tính thuế thu nhập cá nhân chuẩn tại bảng dưới đây:
      </p>
      <div class="table">
        <table>
          <tr>
            <th rowspan="2">Bậc</th>
            <th rowspan="2">Thu nhập tính thuế/tháng</th>
            <th rowspan="2">Thuế suất</th>
            <th colspan="2">Tính số thuế phải nộp</th>
          </tr>
          <tr>
            <th>Cách 1</th>
            <th>Cách 2</th>
          </tr>
          <tr v-for="item in tableRankBasic2" :key="item.rank">
            <td>{{ item.rank }} </td>
            <td>{{ item.saraly }} </td>
            <td>{{ item.tax }}</td>
            <td>{{ item.taxMoney1 }}</td>
            <td>{{ item.taxMoney2 }}</td>
          </tr>
        </table>
      </div>
      <h4><b>* Mức lương bao nhiêu phải nộp thuế?</b></h4>
      <p>
        Cá nhân không có người phụ thuộc thì cần phải nộp thuế thu nhập khi cá
        nhân này có tổng thu nhập từ tiền lương, tiền công trên 11 triệu
        đồng/tháng (phần thu nhập này đã trừ các khoản đóng bảo hiểm bắt buộc
        theo quy định và các khoản đóng góp khác như từ thiện).
      </p>
      <p>
        Bạn có thể tham khảo bảng mức thu nhập phải nộp thuế trong bảng dưới
        đây:
      </p>
      <div class="table">
        <table>
          <tr>
            <th>STT</th>
            <th>Số người phụ thuộc</th>
            <th>Thu nhập từ tiền công, tiền <br> lương/tháng</th>
            <th>Tổng thu nhập từ tiền công, tiền <br> lương/năm</th>
          </tr>
          <tr v-for="item in tableRankBasic3" :key="item.rank">
            <td>{{ item.rank }} </td>
            <td>{{item.peopleDependent}} </td>
            <td>{{item.saralyMonth}}</td>
            <td>{{item.saralyYear}}</td>
          </tr>
        </table>
      </div>
      <p>
        <b>Lưu ý:</b> Phần thu nhập trong bảng là thu nhập đã trừ các khoản sau:
      </p>
      <p>
        - Các đóng bảo hiểm, đóng góp từ thiện, khuyến học, quỹ hưu trí tự
        nguyện.
      </p>
      <p>- Thu nhập được miễn thuế.</p>
      <p>
        - Các khoản không tính thuế thu nhập như: trợ cấp, phụ cấp ăn trưa, phụ
        cấp gửi xe.
      </p>
      <h4>
        <b>B. Đối với cá nhân không ký hợp đồng lao động hoặc ký hợp đồng lao
          động dưới 3 tháng</b>
      </h4>
      <p>
        Công thức thuế thu nhập cá nhân đối với cá nhân không ký hợp đồng lao
        động hoặc ký hợp đồng lao động dưới 3 tháng như sau:
      </p>
      <p>Thuế thu nhập cá nhân phải nộp = 10% x Tổng thu nhập trước khi trả</p>
      <h3>Cá nhân không cư trú</h3>
      <h4>Cá nhân không cư trú là gì?</h4>
      <p>
        Cá nhân không cư trú được xác định là người nước ngoài không đáp ứng đủ
        điều kiện của cá nhân cư trú được quy định tại Điều 2
        <a href="#">Luật Thuế thu nhập cá nhân 2007.</a>
      </p>
      <h4>
        <b>A. Công thức tính thuế thu nhập cá nhân của cá nhân không lưu trú</b>
      </h4>
      <div class="box">
        <p>Thuế TNCN phải nộp = Thu nhập chịu thuế TNCN x Thuế suất 20%</p>
      </div>
      <p>
        Trong đó, thu nhập chịu thuế từ tiền lương, tiền công của cá nhân không
        cư trú được xác định như đối với thu nhập chịu thuế thu nhập cá nhân từ
        tiền lương, tiền công của cá nhân cư trú.
      </p>
      <p>Một số thông tin cần lưu ý:</p>
      <p>
        Thời điểm tổ chức, cá nhân trả thu nhập được xác định là thời điểm chịu
        thuế thu nhập cá nhân đối với tiền lương, tiền công.
      </p>
      <p>
        Thời điểm doanh nghiệp bảo hiểm, công ty quản lý quỹ hữu trí tự nguyện
        trả tiền bảo hiểm được xác định là thời điểm xác định thu nhập chịu thuế
        thu nhập đối với khoản tiền phí mua sản phẩm bảo hiểm có tích lũy.
      </p>
      <h4>
        <b>B. Công thức để xác định thu nhập chịu thuế TNCN từ tiền lương, tiền
          công tại Việt Nam trong trường hợp cá nhân không cư trú làm việc đồng
          thời cả ở Việt Nam cả ở nước ngoài nhưng không tách riêng được phần
          thu nhập phát sinh tại Việt Nam</b>
      </h4>
      <p>* Đối với cá nhân người nước ngoài không hiện diện tại Việt Nam</p>
      <div class="box">
        <p>
          Tổng thu nhập phát sinh tại Việt Nam = (Số ngày làm việc cho công việc
          tại Việt Nam / Số ngày làm việc trong năm) * Thu nhập từ tiền lương,
          tiền công toàn cầu (trước thuế) + Thu nhập chịu thuế khác (trước thuế)
          phát sinh tại Việt Nam
        </p>
      </div>
      <p>
        Lưu ý: Tổng số ngày làm việc trong năm được tính theo chế độ quy định
        tại Bộ luật Lao động của Việt Nam
      </p>
      <p>* Đối với cá cá nhân nước ngoài hiện diện tại Việt Nam</p>
      <div class="box">
        <p>
          Tổng thu nhập phát sinh tại Việt Nam = (Số ngày có mặt ở Việt Nam /
          365 ngày) * Thu nhập từ tiền lương, tiền công toàn cầu + Thu nhập chịu
          thuế khác (trước thuế) phát sinh tại Việt Nam
        </p>
      </div>
      <p>
        Lưu ý: Thu nhập chịu thuế khác (trước thuế) phát sinh tại Việt Nam được
        xác định là các khoản lợi ích khác bằng tiền hoặc không bằng tiền mà NLĐ
        được hưởng ngoài tiền lương, tiền công do người sử dụng lao động trả
        hoặc trả hộ cho người lao động.
      </p>
      <h4><b>* Mức lương bao nhiêu phải nộp thuế?</b></h4>
      <p>
        Cá nhân không cư trú thì không được tính giảm trừ gia cảnh, vậy nên chỉ
        cần có thu nhập chịu thuế sẽ phải nộp thuế thu nhập (thu nhập chịu thuế
        > 0 mới phải nộp thuế).
      </p>
      <p>
        Như vậy, chúng ta hiểu rằng chỉ cần có thu nhập từ tiền lương, tiền công
        sẽ phải nộp thuế với mức thuế suất 20% / thu nhập chịu thuế. Trường hợp
        đóng góp từ thiện, khuyến học, nhân đạo, đóng bảo hiểm, quỹ hưu trí tự
        nguyện theo quy định thì được trừ khoản này.
      </p>
      <p>
        Cách đơn giản nhất để tính thuế thu nhập cá nhân chính xác là sử dụng
        công cụ tính thuế thu nhập cá nhân của TopCV. Bạn chỉ cần nhập vào các
        thông số, công cụ sẽ tính toán và phân tích diễn giải từng loại chi phí
        để bạn hiểu rõ nhất mức thuế bạn cần đóng.
      </p>
      <h4><b>Những quy định đóng thuế thu nhập cá nhân khác</b></h4>
      <h3>
        Đâu là những khoản phụ cấp, trợ cấp không tính thuế thu nhập cá nhân?
      </h3>
      <p>
        Theo quy định tại điểm b khoản 2 Điều 2 Thông tư 111/2013/TT-BTC được
        sửa đổi bởi Khoản 1 Điều 11 Thông tư 92/2015/TT-BTC, các khoản phụ cấp
        và trợ cấp sau không phải tính thuế thu nhập cá nhân:
      </p>
      <p>
        - Trợ cấp, phụ cấp ưu đãi hàng tháng và trợ cấp một lần theo quy định
        của pháp luật về ưu đãi người có công.
      </p>
      <p>
        - Trợ cấp hàng tháng, trợ cấp một lần đối với các đối tượng tham gia
        kháng chiến, bảo vệ tổ quốc, làm nhiệm vụ quốc tế, thanh niên xung phong
        đã hoàn thành nhiệm vụ.
      </p>
      <p>
        - Phụ cấp quốc phòng, an ninh; các khoản trợ cấp đối với lực lượng vũ
        trang.
      </p>
      <p>
        - Phụ cấp độc hại, nguy hiểm đối với những ngành, nghề hoặc công việc ở
        nơi làm việc có yếu tố độc hại, nguy hiểm.
      </p>
      <p>- Phụ cấp thu hút, phụ cấp khu vực.</p>
      <p>
        - Trợ cấp khó khăn đột xuất, trợ cấp tai nạn lao động, bệnh nghề nghiệp,
        trợ cấp một lần khi sinh con hoặc nhận nuôi con nuôi, mức hưởng chế độ
        thai sản, mức hưởng dưỡng sức, phục hồi sức khoẻ sau thai sản, trợ cấp
        do suy giảm khả năng lao động, trợ cấp hưu trí một lần, tiền tuất hàng
        tháng, trợ cấp thôi việc, trợ cấp mất việc làm, trợ cấp thất nghiệp và
        các khoản trợ cấp khác theo quy định của Bộ luật Lao động và Luật Bảo
        hiểm xã hội.
      </p>
      <p>
        - Trợ cấp đối với các đối tượng được bảo trợ xã hội theo quy định của
        pháp luật.
      </p>
      <p>- Phụ cấp phục vụ đối với lãnh đạo cấp cao.</p>
      <p>
        - Trợ cấp một lần đối với cá nhân khi chuyển công tác đến vùng có điều
        kiện kinh tế xã hội đặc biệt khó khăn, hỗ trợ một lần đối với cán bộ
        công chức làm công tác về chủ quyền biển đảo theo quy định của pháp
        luật. Trợ cấp chuyển vùng một lần đối với người nước ngoài đến cư trú
        tại Việt Nam, người Việt Nam đi làm việc ở nước ngoài, người Việt Nam cư
        trú dài hạn ở nước ngoài về Việt Nam làm việc.
      </p>
      <p>- Phụ cấp đối với nhân viên y tế thôn, bản.</p>
      <p>- Phụ cấp đặc thù ngành nghề.</p>
      <h3>Thử việc có cần đóng thuế thu nhập cá nhân hay không?</h3>
      <p>
        Theo Khoản 2 Điều 3 Luật Thuế thu nhập cá nhân, phần thu nhập từ tiền
        lương, tiền công được xác định đối tượng chịu thuế thu nhập cá nhân.
      </p>
      <p>
        Căn cứ Thông tư 111/2013/TT-BTC của Bộ Tài Chính hướng dẫn thực hiện
        Luật Thuế thu nhập cá nhân, các trường hợp có thu nhập từ hai triệu
        (2.000.000) đồng/lần trở lên thì phải khấu trừ thuế theo mức 10% trên
        tổng thu nhập.
      </p>
      <h4><b>Ví dụ: </b></h4>
      <p>
        <i>Lương của nhân viên thử việc hưởng 85% mức lương chính thức là
          3.500.000 VNĐ sẽ bị khấu trừ 350.000 đồng => Lương thực nhận là
          3.150.000 VNĐ.</i>
      </p>
      <p>
        Thời điểm khấu trừ: Công ty sẽ khấu trừ thuế thu nhập cá nhân trước khi
        trả cho nhân sự. Thuế TNCN sẽ được công ty trích nộp vào ngân sách nhà
        nước theo đúng quy định.
      </p>
      <h3>
        Tiền tăng ca, tiền làm thêm giờ có bị áp thuế thu nhập cá nhân không?
      </h3>
      <p>
        Chiếu theo quy định tại Khoản 1, Điều 3, Thông tư 111/2013/TT-BTC, thu
        nhập từ tiền công, tiền lương làm việc ban đêm, làm thêm giờ được trả
        cao hơn so với tiền lương, tiền công làm việc ban ngày, làm việc trong
        giờ theo quy định của Bộ luật lao động được miễn thuế thu nhập cá nhân.
      </p>
      <p>
        Tuy nhiên phần tiền này không được miễn toàn bộ mà chỉ được miễn phần
        thu nhập được trả cao hơn so với tiền lương, tiền công làm việc trong
        giờ theo quy định.
      </p>
      <h4><b>Ví dụ:</b></h4>
      <p>
        <i>Ông Nguyễn Văn A có mức lương trả theo ngày làm việc bình thường là
          100.000 đồng/giờ.</i>
      </p>
      <p>
        <i>Theo quy định của công ty, người lao động làm thêm giờ vào ngày
          thường sẽ được trả 150.000 đồng/giờ. Do đó, mức thu nhập được miễn
          thuế thu nhập cá nhân là: 150.000 đồng - 100.000 đồng = 50.000
          đồng/giờ</i>
      </p>
      <p>
        <i>Theo quy định của công ty, người lao động làm thêm giờ vào ngày nghỉ,
          hoặc ngày lễ sẽ được trả 200.000 đồng/giờ. Do đó, mức thu nhập được
          miễn thuế thu nhập cá nhân khi đó là: 200.000 đồng - 100.000 đồng =
          100.000 đồng/giờ</i>
      </p>
      <p>
        Trên đây là những chia sẻ của chúng tôi về thuế thu nhập cá nhân và công
        cụ tính thuế thu nhập cá nhân mới nhất 2023. Hy vọng qua bài viết này
        bạn sẽ nắm được cách tính thuế thu nhập cá nhân, từ đó đảm bảo quyền lợi
        của bản thân.
      </p>
      <h4>
        <b>Thẻ: <router-link to="/">Công cụ và biểu mẫu</router-link></b>
      </h4>
      <div class="box warning">
        <p>
          Bản quyền nội dung thuộc về TopCV.vn, được bảo vệ bởi Luật bảo vệ bản
          quyền tác giả DMCA. Vui lòng không trích dẫn nội dung trang web khi
          chưa được sự cho phép của TopCV.
        </p>
      </div>
      <div class="img">
        <router-link to="/">
          <img src="https://static.topcv.vn/manual/mau-cv-chuyen-nghiep-phu-hop-topcv.png" alt="" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  PoundOutlined,
  TeamOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons-vue";
import Input from "@/components/input/Input.vue";
import Button from "@/components/Button/Button.vue";
import "./thunhapcanhan.scss";
export default {
  data() {
    return {
      dependentPeople: undefined,
      monthlySalary: undefined,
      otherMonthlySalary: undefined,
      salary: "declare",
      region: "1",
      disabledInputSaralyInsurance: true,
      tableRankBasic1: [
        { rank: 1, taxMoney: "Đến 5", saraly: 'Đến 60', tax: 5 },
        { rank: 2, taxMoney: "Trên 5 đến 10", saraly: 'Trên 60 đến 120', tax: 10 },
        { rank: 3, taxMoney: "Trên 10 đến 18", saraly: 'Trên 120 đến 216', tax: 15 },
        { rank: 4, taxMoney: "Trên 18 đến 32", saraly: 'Trên 216 đến 384', tax: 20 },
        { rank: 5, taxMoney: "Trên 32 đến 52", saraly: 'Trên 384 đến 624', tax: 25 },
        { rank: 6, taxMoney: "Trên 52 đến 80", saraly: 'Trên 624 đến 960', tax: 30 },
        { rank: 7, taxMoney: "Trên 80", saraly: 'Trên 960', tax: 35 },
      ],
      tableRankBasic2: [
        { rank: 1, taxMoney2: "  5% TNTT ", taxMoney1: "0 trđ + 5% TNTT", saraly: 'Đến 5 triệu đồng', tax: 5 },
        { rank: 2, taxMoney2: "  10% TNTT - 0,25 trđ ", taxMoney1: "0,24 trđ + 10% TNTT trên 5 trđ", saraly: 'Trên 5 trđ đến 10 trđ', tax: 10 },
        { rank: 3, taxMoney2: "15% TNTT - 0,75 trđ   ", taxMoney1: "0,75 trđ + 15% TNTT trên 10 trđ", saraly: 'Trên 10 trđ đến 18 trđ', tax: 15 },
        { rank: 4, taxMoney2: "  20% TNTT - 1,65 trđ ", taxMoney1: "1,95 trđ + 20% TNTT trên 8 trđ", saraly: 'Trên 18 trđ đến 32 trđ', tax: 20 },
        { rank: 5, taxMoney2: " 25% TNTT - 3,25 trđ  ", taxMoney1: "4,75 trđ + 25% TNTT trên 32 trđ", saraly: 'Trên 32 trđ đến 52 trđ', tax: 25 },
        { rank: 6, taxMoney2: " 30% TNTT - 5,85 trđ  ", taxMoney1: "9,75 trđ + 30% TNTT trên 52 trđ", saraly: 'Trên 52 trđ đến 80 trđ', tax: 30 },
        { rank: 7, taxMoney2: " 35% TNTT - 9,85 trđ  ", taxMoney1: "18,15 trđ + 35% TNTT trên 80 trđ", saraly: 'Trên 80 trđ', tax: 35 },

      ],
      tableRankBasic3: [
        { rank: 1, saralyMonth: "> 11 triệu đồng", saralyYear: '> 132 triệu đồng', peopleDependent: "Không có người phụ thuộc" },
        { rank: 2, saralyMonth: "> 15,4 triệu đồng", saralyYear: '> 184,8 triệu đồng', peopleDependent: "Có 1 người phụ thuộc" },
        { rank: 3, saralyMonth: "> 19,8 triệu đồng", saralyYear: '> 237,6 triệu đồng', peopleDependent: 'Có 2 người phụ thuộc' },
        { rank: 4, saralyMonth: "> 24,2 triệu đồng", saralyYear: '> 290,4 triệu đồng', peopleDependent: 'Có 3 người phụ thuộc' },
        { rank: 5, saralyMonth: "> 28,4 triệu đồng", saralyYear: '> 343,2 triệu đồng', peopleDependent: 'Có 4 người phụ thuộc' },
      ],
    };
  },
  methods: {
    calculateTax() {
      console.log(this.$refs.monthlySalary.value);
      console.log(this.$refs.otherMonthlySalary.value);
      console.log(this.salary);
      console.log(this.region);
      console.log(this.$refs.dependentPeople.value);
    },
  },
  components: {
    PoundOutlined,
    Input,
    InfoCircleOutlined,
    TeamOutlined,
    Button,
  },
  computed: {
    disabledInputSaralyInsurance() {
      if (this.salary === "other") {
        return (this.disabledInputSaralyInsurance = false);
      } else return (this.disabledInputSaralyInsurance = true);
    },
  },
};
</script>
