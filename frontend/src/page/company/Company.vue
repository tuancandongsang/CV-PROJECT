<template>
  <div class="company">
    <div class="company-container">
      <div class="header_background-header">
        <div class="company-header">
          <div class="company-header_infor">
            <div class="company-header_infor-list">
              <ul>
                <li @click="() => changeTopOrList('ListCompany')" :class="showTopOrList === 'ListCompany' ? 'showTypeCompany' : ''">
                  <router-link to="/list-company"><span style="color: black">Danh sách công ty</span></router-link>
                </li>
                <li @click="() => changeTopOrList('TopCompany')" :class="showTopOrList === 'TopCompany' ? 'showTypeCompany' : ''">
                  <router-link to="/top-company"><span style="color: black"> Top công ty</span></router-link>
                </li>
              </ul>
              <h2>Khám phá 100.000+ công ty nổi bật</h2>
              <p>
                Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành
                cho bạn
              </p>
              <div class="company-header_infor-list_search">
                <div class="input">
                  <Input placeholder='Search company' type='text' ref="search" cssColorBorder='greenBorder'
                    cssColor='greenColor'>
                  <template #left>
                    <search-outlined />
                  </template>
                  <template #right>
                    <div>
                      <Button content="Search" btn_css="btn_green" @click="searchCompany" />
                    </div>
                  </template>
                  </Input>
                </div>
              </div>
            </div>
          </div>
          <div class="company-header-img">
            <img src="https://www.topcv.vn/v4/image/company-billBoard.svg" class="w-100" alt="" />
          </div>
        </div>
      </div>
      <div class="company-main">
        <h2 class="company-main-title"  v-if="showTopOrList === 'TopCompany'">
          DANH SÁCH CÁC TOP CÔNG TY
        </h2>
        <h2 class="company-main-title" v-if="showTopOrList === 'ListCompany'">
          DANH SÁCH CÁC CÔNG TY NỔI BẬT
        </h2>
        <div class="company-main-body">
          <div class="company-main-body-item" v-for="item in listTopCompany" :key="item.title">
            <img :src="item.url" alt="" />
            <h5>{{ item.title }}</h5>
            <p>
              {{ item.decreption }}
            </p>
          </div>
        </div>
        <div class="company-main_panigation">
          <PanigationVue :pageSize="pageSize" :totalSize="totalSize" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './company.scss';
import { SearchOutlined } from '@ant-design/icons-vue';
import Button from '@/components/Button/Button.vue';
import Input from '@/components/input/input.vue';
import PanigationVue from '@/components/Panigation/Panigation.vue';
export default {
  components: { Input, Button, PanigationVue, SearchOutlined },
  methods: {
    searchCompany() {
      console.log('tuancan');
      console.log(this.$refs.search.value);
    },
    changeTopOrList(text) {
      this.showTopOrList = text;
    },
  },
  created() {
    this.showTopOrList = this.$route.name
    this.$watch(
      () => this.$route.name,
      (toParams, previousParams) => {
        this.showTopOrList = toParams
      }
    )
  },
  data() {
    return {
      showTopOrList: '',
      listTopCompany: [
        {
          url: 'https://static.topcv.vn/top_lists/ee42f870851bdb21f12e43aa0e58e8c3-5c3c0721000a4.jpg',
          title: 'TOP CÔNG TY VIỄN THÔNG',
          decreption:
            '" Tất cả những việc làm hot nhất tại các Công ty viễn thông hàng đầu Việt Nam. Nơi bạn sẽ được trải nghiệm, thử thách bản thân. Các Công ty viễn thông lọt vào danh sách này dựa trên những tiêu chí Chất lượng sản phẩm - Môi trường làm việc - Chế độ đãi ngộ - Khả năng học hỏi do TopCV đánh giá, để đảm bảo rằng đây..."',
        },
        {
          url: 'https://static.topcv.vn/top_lists/ee42f870851bdb21f12e43aa0e58e8c3-5c3c0721000a4.jpg',
          title: 'TOP CÔNG TY VIỄN THÔNG',
          decreption:
            '" Tất cả những việc làm hot nhất tại các Công ty viễn thông hàng đầu Việt Nam. Nơi bạn sẽ được trải nghiệm, thử thách bản thân. Các Công ty viễn thông lọt vào danh sách này dựa trên những tiêu chí Chất lượng sản phẩm - Môi trường làm việc - Chế độ đãi ngộ - Khả năng học hỏi do TopCV đánh giá, để đảm bảo rằng đây..."',
        },
        {
          url: 'https://static.topcv.vn/top_lists/ee42f870851bdb21f12e43aa0e58e8c3-5c3c0721000a4.jpg',
          title: 'TOP CÔNG TY VIỄN THÔNG',
          decreption:
            '" Tất cả những việc làm hot nhất tại các Công ty viễn thông hàng đầu Việt Nam. Nơi bạn sẽ được trải nghiệm, thử thách bản thân. Các Công ty viễn thông lọt vào danh sách này dựa trên những tiêu chí Chất lượng sản phẩm - Môi trường làm việc - Chế độ đãi ngộ - Khả năng học hỏi do TopCV đánh giá, để đảm bảo rằng đây..."',
        },
        {
          url: 'https://static.topcv.vn/top_lists/ee42f870851bdb21f12e43aa0e58e8c3-5c3c0721000a4.jpg',
          title: 'TOP CÔNG TY VIỄN THÔNG',
          decreption:
            '" Tất cả những việc làm hot nhất tại các Công ty viễn thông hàng đầu Việt Nam. Nơi bạn sẽ được trải nghiệm, thử thách bản thân. Các Công ty viễn thông lọt vào danh sách này dựa trên những tiêu chí Chất lượng sản phẩm - Môi trường làm việc - Chế độ đãi ngộ - Khả năng học hỏi do TopCV đánh giá, để đảm bảo rằng đây..."',
        },
        {
          url: 'https://static.topcv.vn/top_lists/ee42f870851bdb21f12e43aa0e58e8c3-5c3c0721000a4.jpg',
          title: 'TOP CÔNG TY VIỄN THÔNG',
          decreption:
            '" Tất cả những việc làm hot nhất tại các Công ty viễn thông hàng đầu Việt Nam. Nơi bạn sẽ được trải nghiệm, thử thách bản thân. Các Công ty viễn thông lọt vào danh sách này dựa trên những tiêu chí Chất lượng sản phẩm - Môi trường làm việc - Chế độ đãi ngộ - Khả năng học hỏi do TopCV đánh giá, để đảm bảo rằng đây..."',
        },
        {
          url: 'https://static.topcv.vn/top_lists/ee42f870851bdb21f12e43aa0e58e8c3-5c3c0721000a4.jpg',
          title: 'TOP CÔNG TY VIỄN THÔNG',
          decreption:
            '" Tất cả những việc làm hot nhất tại các Công ty viễn thông hàng đầu Việt Nam. Nơi bạn sẽ được trải nghiệm, thử thách bản thân. Các Công ty viễn thông lọt vào danh sách này dựa trên những tiêu chí Chất lượng sản phẩm - Môi trường làm việc - Chế độ đãi ngộ - Khả năng học hỏi do TopCV đánh giá, để đảm bảo rằng đây..."',
        },
        {
          url: 'https://static.topcv.vn/top_lists/ee42f870851bdb21f12e43aa0e58e8c3-5c3c0721000a4.jpg',
          title: 'TOP CÔNG TY VIỄN THÔNG',
          decreption:
            '" Tất cả những việc làm hot nhất tại các Công ty viễn thông hàng đầu Việt Nam. Nơi bạn sẽ được trải nghiệm, thử thách bản thân. Các Công ty viễn thông lọt vào danh sách này dựa trên những tiêu chí Chất lượng sản phẩm - Môi trường làm việc - Chế độ đãi ngộ - Khả năng học hỏi do TopCV đánh giá, để đảm bảo rằng đây..."',
        },
        {
          url: 'https://static.topcv.vn/top_lists/ee42f870851bdb21f12e43aa0e58e8c3-5c3c0721000a4.jpg',
          title: 'TOP CÔNG TY VIỄN THÔNG',
          decreption:
            '" Tất cả những việc làm hot nhất tại các Công ty viễn thông hàng đầu Việt Nam. Nơi bạn sẽ được trải nghiệm, thử thách bản thân. Các Công ty viễn thông lọt vào danh sách này dựa trên những tiêu chí Chất lượng sản phẩm - Môi trường làm việc - Chế độ đãi ngộ - Khả năng học hỏi do TopCV đánh giá, để đảm bảo rằng đây..."',
        },
        {
          url: 'https://static.topcv.vn/top_lists/ee42f870851bdb21f12e43aa0e58e8c3-5c3c0721000a4.jpg',
          title: 'TOP CÔNG TY VIỄN THÔNG',
          decreption:
            '" Tất cả những việc làm hot nhất tại các Công ty viễn thông hàng đầu Việt Nam. Nơi bạn sẽ được trải nghiệm, thử thách bản thân. Các Công ty viễn thông lọt vào danh sách này dựa trên những tiêu chí Chất lượng sản phẩm - Môi trường làm việc - Chế độ đãi ngộ - Khả năng học hỏi do TopCV đánh giá, để đảm bảo rằng đây..."',
        },
      ],
      pageSize: 9,
    };
  },
  computed: {
    totalSize() {
      return this.listTopCompany.length;
    },
  },
};
</script>
<style></style>
