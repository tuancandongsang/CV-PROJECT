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
                <div>thang</div>
                <div>nam</div>
                <div>den</div>
                <div>thang</div>
                <div>nam</div>
                <div>tien</div>
                <div>xoa</div>
            </div>
            <div class="select-item">
                <div>thang</div>
                <div>nam</div>
                <div>den</div>
                <div>thang</div>
                <div>nam</div>
                <div>tien</div>
                <div>xoa</div>
            </div>
            <div class="select-item">
                <div>thang</div>
                <div>nam</div>
                <div>den</div>
                <div>thang</div>
                <div>nam</div>
                <div>tien</div>
                <div>xoa</div>
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
import Button from '@/components/Button/Button.vue'
export default {
    components: { Button }

}
</script>