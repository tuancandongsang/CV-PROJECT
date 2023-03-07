<!-- 
  <Input placeholder='' type='' cssColorBorder='greenBorder' cssColor='greenColor' lable=''>
    <template #left>
      
    </template>
    <template #right>
    
    </template>
  </Input>
 -->
<template>
  <div id="input">
    <label for="">{{ lable }}</label>
    <div class="input-container" :class="cssColorBorder">
      <div :class="cssColor">
        <slot name="left"></slot>
      </div>
      <input :type="type" v-model="value" :placeholder="placeholder" />
      <div :class="cssColor">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["placeholder", "type", "cssColorBorder", "cssColor", "lable"],
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/index.scss";

#input {
  .greenColor {
    color: $text-green;
  }

  .greenBorder {
    border-color: $border-input-green;

    &:focus-within {
      border: 1px solid $border-input-green;
    }

    &:hover {
      border: 1px solid $border-input-green;
    }
  }

  .blueColor {
    color: $text-blue;
  }

  .blueBorder {
    border-color: $border-input-blue;

    &:focus-within {
      border: 1px solid $border-input-blue;
    }

    &:hover {
      border: 1px solid $border-input-blue;
    }
  }

  .input-container {
    width: 100%;
    display: flex;
    padding: 6px 12px;
    border-radius: 4px;
    border: 1px solid $border-input-gray;
    background-color: $btn-default;
    align-items: center;

    input {
      margin: 0 6px;
      outline: none;
      border: none;
      text-align: start;
      flex: 1;
      -webkit-appearance: none;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}</style>