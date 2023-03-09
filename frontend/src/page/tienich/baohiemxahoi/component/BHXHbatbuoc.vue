<template>
    <div id="bhxh">
        <div class="title">
            <p>Giai đoạn nộp BHXH</p>
            <div class="title-right">
                <p> Mức lương đóng BHXH</p>
            </div>
        </div>
        <div class="select">
            <div class="select-item">
                <div>
                    <SelectOptionBase placeholder="Chọn tháng" :options="options" />
                </div>
                <div>
                    <SelectOptionBase placeholder="Chọn Năm" :options="options" />
                </div>
                <div>Đến</div>
                <div>
                    <SelectOptionBase placeholder="Chọn tháng" :options="options" />
                </div>
                <div>
                    <SelectOptionBase placeholder="Chọn Năm" :options="options" />
                </div>

                <div>
                    <Input placeholder='VD: 5,000,000' type='number' cssColorBorder='greenBorder' cssColor='greenColor'
                        lable=''>
                    <template #left>
                        <pay-circle-outlined />
                    </template>
                    <template #right>
                        <span>VND</span>
                    </template>
                    </Input>
                </div>
                <div>
                    <delete-outlined />
                </div>
            </div>
        </div>
        <div class="submit">
            <div class="submit-item">
                <Button content="Thêm giai đoạn" btn_css="button_second" />
            </div>
            <div class="submit-item">
                <Button content="Thêm giai đoạn thai sản" btn_css="button_second" />
            </div>
        </div>
    </div>
</template>
<script>
import { PayCircleOutlined, DeleteOutlined } from "@ant-design/icons-vue";
import Button from '@/components/Button/Button.vue'
import SelectOptionBase from '../../../../components/SelectOption/SelectOptionBase.vue';
import Input from '../../../../components/input/Input.vue'
export default {
    components: { Button, SelectOptionBase, Input, PayCircleOutlined, DeleteOutlined }

}
</script>