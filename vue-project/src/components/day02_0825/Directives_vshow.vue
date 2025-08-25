<template>
    <div v-show="showDiv">이 요소는 감출 수 있다.</div>

    <p>=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</p>

    <div>div태그를 보이게/감추게 하다.</div>
    <div>div태그를 요소 생성/비생성 </div>

    <button @click="() => view = true"><>코드 보기</button>

    <div v-show="view" class="codeView">
    <pre>
        &lt;template&gt;
            &lt;div v-show= 'showDiv'&gt; 이 요소는 감출 수 있다.&lt;/div&gt;

            &lt;p&gt;=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=&lt;/p&gt;

            &lt;div&gt;div태그를 보이게/감추게 하다.&lt;/div&gt;
            &lt;div&gt;div태그를 요소 생성/비생성&lt;/div&gt;
        &lt;/template&gt;

        &lt;script setup&gt;
        import { ref } from 'vue';

        const showDiv = ref(true);
        &lt;/script&gt;
    </pre>

    <button @click="() => view = false"> X </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(true);
const view = ref(false);
</script>

<style scoped>
div {
    padding: 10px;
}
</style>