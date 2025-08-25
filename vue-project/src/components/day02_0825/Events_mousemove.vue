<template>
    <p>마우스를 올려보세요.</p>
    <div @mousemove="colorVal = Math.floor(Math.random() * 360)" :style="{
        backgroundColor: 'hsl(' + colorVal + ', 60%, 60%)',
        width: '200px',
        height: '80px'
    }"></div>
    <p>backgroundColor: hsl({{ colorVal }}, 60%, 60%)</p>

    <button @click="view = true">
        <>코드 보기
    </button>

    <div v-show="view" class="codeView">
        <pre>
&lt;template&gt;
    &lt;p&gt;마우스를 올려보세요.&lt;/p&gt;
    &lt;div @mousemove='colorVal = Math.floor(Math.random() * 360)' :style='{
            backgroundColor: 'hsl(' + colorVal + ', 60%, 60%)',
            width: '200px',
            height: '80px'
    }'&gt;&lt;/div&gt;
    &lt;p&gt;backgroundColor: hsl (&#123;&#123; colorVal &#125;&#125;, 60%, 60%)&lt;/p&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const colorVal = ref(50);
&lt;/script&gt;
        </pre>
        <button @click="view = false"> X </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const colorVal = ref(50);
const view = ref(false);
</script>

<style scoped></style>