<!-- 
    placeholder="placeholder" :options="options"
 -->

<template>
  <a-select
    v-model:value="value"
    show-search
    :placeholder="placeholder"
    style="width: 100%"
    :options="options"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  >
  </a-select>
</template>
<script>
import { defineComponent, ref, defineProps } from "vue";
export default defineComponent({
  setup() {
    const props = defineProps(["options", "placeholder"]);
    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };

    const handleBlur = () => {
      console.log("blur");
    };

    const handleFocus = () => {
      console.log("focus");
    };

    const filterOption = (input, option) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    return {
      value: ref(undefined),
      props,
      filterOption,
      handleBlur,
      handleFocus,
      handleChange,
    };
  },
});
</script>
