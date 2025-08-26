<template>
    <div class="keyBox">
        <p>아무 키나 입력해보세요.</p>
        <input type="text" @keydown="getKey">
        <p class="result">{{ keyValue }}</p>
    </div>

    <div class="mouseBox">
        <div @click.right.prevent="changeColor" :style="{
            backgroundColor: 'hsl(' + bgColor + ', 80%, 80%)'
        }">
            <p>마우스 우클릭</p>
        </div>
    </div>

    <button @click="view = true"><>코드 보기</button>

    <div v-show="view" class="codeView">
        <pre>
&lt; template &gt;
    &lt; div class='ketBox' &gt;
        &lt; p &gt;아무 키나 입력해보세요.&lt; /p &gt;
        &lt; input type='text' @keydown='getKey' &gt;
        &lt; p class='result' &gt;&#123;&#123; keyValue &#125;&#125;&lt; /p &gt;
    &lt; /div &gt;

    &lt; div class='mouseBox' &gt;
        &lt; div @click.right.prevent='changeColor' :style='{
            backgroundColor: 'hsl(' + bgColor + ', 80%, 80%)'
        }' &gt;
            &lt; p &gt;마우스 우클릭&lt; /p &gt;
        &lt; /div &gt;
    &lt; /div &gt;
&lt; /template &gt;

&lt; script setup &gt;
import { ref } from 'vue';

const keyValue = ref('');

const getKey = (event) => {
    keyValue.value = event.key;
}

const bgColor = ref(0);

const changeColor = () => {
    bgColor.value += 50;
}
&lt; script &gt;
        </pre>
        <button @click="view = false"> X </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const keyValue = ref('');

const getKey = (event) => {
    keyValue.value = event.key;
}

const bgColor = ref(0);

const changeColor = () => {
    bgColor.value += 50;
}

const view = ref(false);
</script>

<style scoped>
.result {
    background-color: lightblue;
    width: 200px;
    margin-top: 10px;
    padding: 2px 10px;
    font-size: 1.2em;
}

input {
    font-size: 1.2em;
    padding: 2px 10px;
    width: 200px;
}

.mouseBox {
    margin: 10px 0;
}

.mouseBox > div {
    width: 160px;
    padding: 20px;
    cursor: default;
    font-weight: bold;
}
</style>