<!-- 
    placeholder="placeholder" :options="options" :disabled="false"
type options
    options : [
      {
        value: 'jack',
        label: 'Jack',
      },
    ],
 -->

<template>
  <a-select
    v-model:value="value"
    show-search
    :disabled="disabled"
    :placeholder="placeholder"
    style="width: 100%"
    :options="options"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
    class="alo"
  >
  </a-select>
</template>
<script>
import { BulbOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, defineProps } from "vue";
export default defineComponent({
  components: {
    BulbOutlined,
  },
  setup() {
    const props = defineProps(["options", "placeholder", "disabled"]);
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
<style>
.alo {
  font-weight: bold;
}
</style>
