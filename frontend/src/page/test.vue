<template>
  <div class="wrapper">
    <TransitionGroup
      id="list"
      name="swipe"
      tag="div"
      class="transition-container"
    >
      <img
        v-for="(picture, i) in pictures"
        :key="picture.src"
        :src="picture.src"
        alt=""
        class="image"
      />
    </TransitionGroup>
    <button class="previous" @click="previous">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1792 1792"
        style="enable-background: new 0 0 1792 1792"
        xml:space="preserve"
      >
        <path
          d="M259.9,983.3c-23.6-23.2-35.9-55.6-33.6-88.6c-2.4-31.9,10-63,33.6-84.6l546.3-548.3c45.4-45.4,119-45.4,164.4,0
	s45.4,119,0,164.4L616.3,780.5h833.6c63.8-0.4,115.8,51,116.1,114.8c0,0.2,0,0.4,0,0.7c-0.4,64-52.1,115.8-116.1,116.1H616.3
	l354.4,353.7c45.4,45.4,45.4,119,0,164.4s-119,45.4-164.4,0l0,0L259.9,983.3z"
        />
      </svg>
    </button>
    <button class="next" @click="next">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1792 1792"
        style="enable-background: new 0 0 1792 1792"
        xml:space="preserve"
      >
        <path
          d="M1532.1,808.7c23.6,23.2,35.9,55.6,33.6,88.6c2.4,31.9-10,63-33.6,84.6l-546.3,548.3c-45.4,45.4-119,45.4-164.4,0
	c-45.4-45.4-45.4-119,0-164.4l354.4-354.4H342.1c-63.8,0.4-115.8-51-116.1-114.8c0-0.2,0-0.4,0-0.7c0.4-64,52.1-115.8,116.1-116.1
	h833.6L821.4,426.2c-45.4-45.4-45.4-119,0-164.4c45.4-45.4,119-45.4,164.4,0l0,0L1532.1,808.7z"
        />
      </svg>
    </button>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const pictures = ref(
      Array.from({ length: 10 }, (_, i) => ({
        src: `https://picsum.photos/600/400?random=${i + 1}`,
      }))
    );

    const previous = () => {
      const lastSlide = pictures.value.pop();
      pictures.value = [lastSlide].concat(pictures.value);
    };

    const next = () => {
      const firstPicture = pictures.value.shift();
      pictures.value = pictures.value.concat(firstPicture);
    };
    return {
      pictures,
      previous,
      next,
    };
  },
});
</script>

<style lang="postcss">
.wrapper {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
}

.transition-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.image {
  width: 40vw;
  z-index: 10;
  pointer-events: none;
}
.image:first-child {
  z-index: 5;
}

.image:last-child {
  z-index: 5;
}

.previous,
.next {
  position: absolute;
  top: 50%;
  z-index: 15;
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 50%;
  border: none;
  background: white;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.previous {
  left: 20px;
}

.next {
  right: 20px;
}

.previous:hover,
.next:hover {
  opacity: 1;
}

.previous > svg,
.next > svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.swipe-move {
  transition: all 0.3s;
}
</style>
