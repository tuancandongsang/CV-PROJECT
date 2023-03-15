<template>
  <div class="question-item">
    <div class="question-item-title">
      <p class="question-detail">
        {{ question }}
      </p>
      <p class="question-icon">
        <span v-if="up === 'up'" @click="changeUP('down')"
          ><UpCircleOutlined
        /></span>
        <span v-if="up === 'down'" @click="changeUP('up')"
          ><DownCircleOutlined
        /></span>
      </p>
    </div>
    <div class="question-popup" v-if="up === 'down'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { UpCircleOutlined, DownCircleOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    UpCircleOutlined,
    DownCircleOutlined,
  },
  props: ["question"],
  methods: {
    changeUP(text) {
      console.log("tuan", text);
      this.up = text;
    },
  },
  computed: {
    up() {
      return this.up;
    },
  },
  data() {
    return {
      up: "up",
    };
  },
};
</script>

<style></style>
