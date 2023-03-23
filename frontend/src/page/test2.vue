<template>
  <div id="example">
    <carousel-3d
      :autoplay="true"
      :autoplay-timeout="3000"
      :controls-visible="true"
      :controls-prev-html="'&#x2039; '"
      :controls-next-html="'&#x203A;'"
      :controls-width="10"
      :controls-height="30"
      :clickable="false"
    >
      <slide :index="0">
        <img
          src="https://d25tv1xepz39hi.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
        />
      </slide>

      <slide :index="1">
        <img
          src="https://thienha3d.vn/wp-content/uploads/2019/01/hinh-dan-tuong-phong-canh-04.jpg"
        />
      </slide>

      <slide :index="2">
        <img
          src="https://d25tv1xepz39hi.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
        />
      </slide>

      <slide :index="3">
        <img src="https://zshop.vn/images/link/63/1045.jpg?t=1474958283" />
      </slide>

      <slide :index="4">
        <img
          src="https://kenh14cdn.com/thumb_w/660/2019/3/21/photo-1-1553155372658221231913.jpg"
        />
      </slide>

      <slide :index="5">
        <img
          src="http://product.hstatic.net/1000298822/product/hinh-anh-dep-ve-tinh-yeu-chung-thuy_95129557953643089a963335468f3ec0.jpg"
        />
      </slide>

      <slide :index="6">
        <img
          src="https://i.pinimg.com/originals/53/b0/77/53b077524c0dd34ac0cf92631ab1e9a6.jpg"
        />
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  components: {
    Carousel3d,
    Slide
  }
};
</script>

<style scoped>
.carousel-3d-slide {
  height: unset !important;
}

.carousel-3d-slide {
  box-shadow: 0 6px 6px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
.prev[data-v-05517ad0] {
  left: 244px !important;
  top: 0px !important;
}
.next[data-v-05517ad0] {
  right: 225px !important;
  top: 0px !important;
}
.Next slide span {
  font-size: 20px;
}
.carousel-3d-container .next span {
  font-size: 40px;
}
.carousel-3d-container .prev span {
  font-size: 40px;
}
.carousel-3d-slide {
  width: 400px !important;
}
</style>