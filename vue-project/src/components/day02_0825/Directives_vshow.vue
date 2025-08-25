<template>
    <div v-show="showDiv">이 요소는 감출 수 있다.</div>

    <p>=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</p>

    <div>div태그를 보이게/감추게 하다.</div>
    <div>div태그를 요소 생성/비생성 </div>

    <pre>
        &lt;script setup&gt;
        import { ref } from 'vue';

        const showDiv = ref(true);
        &lt;/script&gt;
    </pre>
</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(true);
</script>

<style scoped>
div {
    padding: 10px;
}
</style>