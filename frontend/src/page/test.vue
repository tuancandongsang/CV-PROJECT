<template>
  <div id="slider">
    <div class="slider">
      <ul class="slides" :style="{ left: -width * current + 'px' }">
        <li v-for="(slide, i) in slides" :key="i">
          <img :src="slide" alt="" />
        </li>
      </ul>
      <ul class="bullets">
        <li
          v-for="(slide, i) in slides"
          :key="i"
          v-html="i == current ? '&#9679;' : '&omicron;'"
        ></li>
      </ul>
    </div>
    <a class="prev" href="#" @click.prevent="prevSlide">&#x25C0;</a>
    <a class="next" href="#" @click.prevent="nextSlide">&#x25B6;</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",
        "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",
        "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",
        "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",
        "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",
      ],
      current: 0,
      width: 800,
      timer: 0,
    };
  },
  methods: {
    nextSlide: function () {
      this.current++;
      if (this.current >= this.slides.length) this.current = 0;
      this.resetPlay();
    },
    prevSlide: function () {
      this.current--;
      if (this.current < 0) this.current = this.slides.length - 1;
      this.resetPlay();
    },
    selectSlide: function (i) {
      this.current = i;
      this.resetPlay();
    },
    resetPlay: function () {
      clearInterval(this.timer);
      this.play();
    },
    play: function () {
      let app = this;
      this.timer = setInterval(function () {
        app.nextSlide();
      }, 2000);
    },
  },
  created: function () {
    this.play();
  },
};
</script>

<style lang="scss" scoped>
#slider {
  width: 100%;
  height: 500px;
  position: relative;
  .prev,
  .next {
    text-decoration: none;
    color: green;
    // padding: 50px 60px;
    // background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    font-size: 42px;
    top: 50%;
    transform: translate(0, -50%);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
  .prev {
    left: 20px;
  }
  .next {
    right: 20px;
  }
}

.slider {
  margin: 0 auto;
  padding: 0;
  width: 1150px;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul.slides {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: table;
    position: absolute;
    top: 0;
    transition: left 800ms;
    li {
      list-style-type: none;
      display: table-cell;
      width: 100%;
      img {
        width: 1150px;
        object-fit: fill;
      }
    }
  }
  ul.bullets {
    width: inherit;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0 0 10px 0;
    text-align: center;
    z-index: 1;
    li {
      list-style-type: none;
      display: inline;
      color: #fff;
      cursor: pointer;
      padding: 0 5px;
      font-size: 20px;
      font-family: sans-serif;
    }
  }
}
</style>
