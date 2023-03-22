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
            <SelectOptionBaseVue placeholder="placeholder" :options="options" />
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
  </div>
</template>

<script>
import { SearchOutlined } from "@ant-design/icons-vue";
import "./Home.scss";
import Drawer from "@/components/Drawer/Drawer.vue";
import ButtonVue from "@/components/Button/Button.vue";
import SelectOptionBaseVue from "@/components/SelectOption/SelectOptionBase.vue";
import Input from "@/components/input/Input.vue";
export default {
  components: { Drawer, ButtonVue, SelectOptionBaseVue, Input, SearchOutlined },
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
