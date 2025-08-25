<template>
    <div>
        <input type="text" @input="inpCount++" placeholder="입력하세요">
        <p>{{ 'Input events occured: ' + inpCount }}</p>
    </div>

    <button @click="view = true">
        <>코드 보기
    </button>

    <div v-show="view" class="codeView">
        <pre>
&lt;template&gt;
    &lt;div&gt;
        &lt;input type='text' @input='inpCount++' placeholder='입력하세요'&gt;
        &lt;p&gt;&#123;&#123; 'Input events occured: ' + inpCount &#125;&#125;&lt;/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
    import { ref } from 'vue';

    const inpCount = ref(0);
&lt;/script&gt;
        </pre>

        <button @click="view = false"> X </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inpCount = ref(0);
const view = ref(false);
</script>

<style scoped>
input {
    padding: 10px 20px;
    font-size: 20px;
}
</style>